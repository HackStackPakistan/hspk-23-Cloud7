import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../models/http.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private api = environment.api + '/api';

  constructor(private http: HttpClient) { }

  get(route: string, params: { [key: string]: any } = {}) {
    return this.http.get<HttpResponse>(this.api + route, { params });
  }

  post(route: string, body: { [key: string]: any }) {
    return this.http.post<HttpResponse>(this.api + route, body);
  }

  put(route: string, body: { [key: string]: any }) {
    return this.http.put<HttpResponse>(this.api + route, body);
  }

  del(route: string, params: { [key: string]: any } = {}) {
    return this.http.delete<HttpResponse>(this.api + route, { params })
  }
}
