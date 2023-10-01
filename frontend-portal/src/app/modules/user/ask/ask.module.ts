import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask.component';


@NgModule({
  declarations: [
    AskComponent
  ],
  imports: [
    CommonModule,
    AskRoutingModule
  ]
})
export class AskModule { }
