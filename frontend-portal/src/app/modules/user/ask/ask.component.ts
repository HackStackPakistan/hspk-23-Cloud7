import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMarks } from 'ng-zorro-antd/slider';
import { finalize, map } from 'rxjs';
import { API } from 'src/app/core/constants/api.constant';
import { HttpRequestService } from 'src/app/core/services/http.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'am-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.less']
})
export class AskComponent {

  fb = inject(FormBuilder);
  http = inject(HttpRequestService);
  notification = inject(NotificationService);
  loading = { init: false, update: false };
  marks: NzMarks = {
    0: '0 Years',
    40: '40 Years',
    90: '90 Years',
  };

  marketForm = this.fb.group({
    productName: ['', [Validators.required]],
    productDescription: ['', [Validators.required]],
    productCategory: ['', [Validators.required]],
    ageRange: [[20, 80]],
  });

  isFormVisible = true;
  output: any = null;
  keys: any = [];

  ObjectKeys = Object.keys;

  submit() {
    for (const i in this.marketForm.controls) {
      this.marketForm.get(i)?.markAsDirty();
      this.marketForm.get(i)?.updateValueAndValidity();
    }
    if (this.marketForm.invalid) return;

    this.loading.update = true;

    let { ageRange, ...reqBody } = this.marketForm.value;
    (reqBody as any).minAgeOfAudience = ageRange?.[0];
    (reqBody as any).maxAgeOfAudience = ageRange?.[1];

    this.http.post(API.marketing, reqBody)
      .pipe(map(response => response.data))
      .pipe(finalize(() => {
        this.loading.update = false;
      }))
      .subscribe(output => {
        if (output) {
          try {
            this.output = JSON.parse(output);
          }
          catch (e) { }
        }
        this.isFormVisible = false;
      });
  }
}
