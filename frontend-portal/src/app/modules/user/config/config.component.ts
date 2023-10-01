import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { delay, finalize, map } from 'rxjs';
import { fadeInOut } from 'src/app/core/animations/fade-slide-right';
import { API } from 'src/app/core/constants/api.constant';
import { HttpRequestService } from 'src/app/core/services/http.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { userQ } from 'src/app/core/stores/user.repository';

@Component({
  selector: 'am-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less'],
  animations: [fadeInOut]
})
export class ConfigComponent {

  fb = inject(FormBuilder);
  http = inject(HttpRequestService);
  notification = inject(NotificationService);
  loading = { init: false, update: false };
  isVisible = false;

  configForm = this.fb.group({
    url: ['', [Validators.required]],
    apiKey: ['', [Validators.required]],
    secretKey: ['', [Validators.required]]
  });

  ngOnInit() {
    this.loading.init = true;
    this.http.get(API.config)
      .pipe(delay(200))
      .pipe(map(response => response.data))
      .pipe(finalize(() => {
        this.loading.init = false;
      }))
      .subscribe(config => {
        if (config)
          this.configForm.patchValue(config);
      });
  }

  submit() {
    for (const i in this.configForm.controls) {
      this.configForm.get(i)?.markAsDirty();
      this.configForm.get(i)?.updateValueAndValidity();
    }
    if (this.configForm.invalid) return;

    this.loading.update = true;
    this.http.put(API.config, this.configForm.value)
      .pipe(finalize(() => {
        this.loading.update = false;
      }))
      .subscribe(() => {
        this.notification.success("Updated", "Configuration was saved successfully.");
      });
  }
}
