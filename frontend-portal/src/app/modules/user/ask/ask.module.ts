import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzAlertModule } from 'ng-zorro-antd/alert';



@NgModule({
  declarations: [
    AskComponent
  ],
  imports: [
    CommonModule,
    AskRoutingModule,
    ReactiveFormsModule,

    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzFormModule,
    NzSpinModule,
    NzSliderModule,
    NzAlertModule
  ]
})
export class AskModule { }
