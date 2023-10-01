import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { NzTableModule } from "ng-zorro-antd/table";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    // Angular Dependencies
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,

    // UI Deps
    NzTableModule,
    NzModalModule,
    NzButtonModule,
    NzAlertModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule
  ]
})
export class UsersModule { }
