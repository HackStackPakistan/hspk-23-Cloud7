import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/core/services/http.service';
import { API } from "src/app/core/constants/api.constant";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpRequestService) { }

  fetchUsers() {
    return this.http.get(API.crudUsers);
  }
}
