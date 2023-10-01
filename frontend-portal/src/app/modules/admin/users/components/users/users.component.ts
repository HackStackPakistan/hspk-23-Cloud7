import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { finalize, map } from 'rxjs';
import { User } from 'src/app/core/models/entities.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  loading = { list: false };
  users: User[] = [];

  constructor(private modal: NzModalService, private userSvc: UserService) { }

  ngOnInit(): void {
    this.loading.list = true;
    this.userSvc.fetchUsers()
      .pipe(map(response => response.data))
      .pipe(finalize(() => {
        this.loading.list = false;
      }))
      .subscribe(data => {
        this.users = data;
      });
  }

}
