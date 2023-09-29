import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { EnvServiceProvider } from './core/services/env.service.provider';

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

    // Application Dependencies
    NavigationModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    EnvServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
