import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    
    NzTableModule,
  ]
})
export class LogsModule { }
