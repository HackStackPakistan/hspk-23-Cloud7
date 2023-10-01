import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap } from 'rxjs';
import { API } from '../constants/api.constant';
import { resetAuthStore, skipWhileAuthCached, updateAuthToken } from '../stores/auth.repository';
import { resetUserStore, updateUserDetail, UserProps } from '../stores/user.repository';
import { HttpRequestService } from './http.service';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpRequestService) { }

  login(form: { email: string, password: string }) {
    return this.http.post(API.login, form)
      .pipe(
        map(response => response.data),
        tap(updateAuthToken),
        skipWhileAuthCached('token'),
        map(data => {
          let user: UserProps['detail'] = null;
          if (data.token) user = helper.decodeToken(data.token);
          return user;
        }),
        tap(updateUserDetail)
      )
  }

  logout() {
    resetAuthStore();
    resetUserStore();
  }
}
