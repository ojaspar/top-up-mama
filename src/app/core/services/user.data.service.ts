import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseURI } from './shared/base-uri.service';

abstract class AbstractUserDataService {
  abstract getAllUsers(page: number): Observable<any>;
  abstract getSingleUser(id: number): Observable<any>;
  abstract deleteUser(id: number | string): Observable<any>;
  abstract updateJob(
    data: { name: string; job: string },
    id: string
  ): Observable<any>;
}
@Injectable({
  providedIn: 'root',
})
export class UserDataService
  extends BaseURI
  implements AbstractUserDataService
{
  constructor(private http: HttpClient) {
    super();
  }

  getAllUsers(page: number) {
    return this.http.get<any>(`${this.baseUrl}users?page=${page}`);
  }

  getSingleUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}users/${id}`);
  }

  deleteUser(id: number | string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}users/${id}`);
  }
  updateJob(data: { name: string; job: string }, id: string) {
    return this.http.put<any>(`${this.baseUrl}users/${id}`, data);
  }
}
