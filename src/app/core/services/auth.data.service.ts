import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from '../interfaces/app.interface';
import { BaseURI } from './shared/base-uri.service';

export abstract class AbstractAuthService {
  abstract registerUser(data: IAuth): Observable<any>;
  abstract login(data: IAuth): Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthDataService extends BaseURI implements AbstractAuthService {
  constructor(private http: HttpClient) {
    super();
  }

  registerUser(data: IAuth) {
    return this.http.post<any>(`${this.baseUrl}register`, data);
  }

  login(data: IAuth) {
    return this.http.post<any>(`${this.baseUrl}login`, data);
  }
}
