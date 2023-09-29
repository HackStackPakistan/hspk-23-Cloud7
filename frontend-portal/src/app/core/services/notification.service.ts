import { Injectable } from '@angular/core';
import { NzNotificationDataOptions, NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private options: NzNotificationDataOptions = {
    nzDuration: 3000,
    nzPlacement: 'topRight',
    nzClass: 'scr-notification'
  }

  constructor(private nzNotify: NzNotificationService) { }

  success(title: string, content: string) {
    this.nzNotify.success(title, content, this.options);
  }

  error(title: string, content: string) {
    this.nzNotify.error(title, content, this.options);
  }
}
