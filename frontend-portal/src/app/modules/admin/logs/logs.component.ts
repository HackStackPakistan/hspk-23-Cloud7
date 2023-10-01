import { Component, inject } from '@angular/core';
import { finalize, map } from 'rxjs';
import { API } from 'src/app/core/constants/api.constant';
import { Log } from 'src/app/core/models/entities.model';
import { HttpRequestService } from 'src/app/core/services/http.service';

@Component({
  selector: 'am-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less']
})
export class LogsComponent {

  http = inject(HttpRequestService);

  loading = { list: false };
  logs: Log[] = [];

  ngOnInit(): void {
    this.loading.list = true;
    this.http.get(API.logs)
      .pipe(map(response => response.data))
      .pipe(finalize(() => {
        this.loading.list = false;
      }))
      .subscribe(data => {
        this.logs = data;
      });
  }
}
