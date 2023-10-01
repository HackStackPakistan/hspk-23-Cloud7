import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NavigationModule } from './core/components/navigation/navigation.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { EnvServiceProvider } from './core/services/env.service.provider';
import { JwtInterceptorService } from './core/services/jwt-interceptor.service';
import { ErrorInterceptorService } from './core/services/error-interceptor.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzLayoutModule,
    NzAvatarModule,
    NzPopoverModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzAlertModule,
    NzIconModule,
    NzButtonModule,
    NzNotificationModule,
    NzDrawerModule,

    // Application Dependencies
    NavigationModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    EnvServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
