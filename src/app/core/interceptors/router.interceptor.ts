import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/shared/storage.service';

@Injectable()
export class RouterInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';
  private token: string = '';
  constructor(private storage: StorageService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.token = this.storage.getItem('access_token');

    if (this.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    }
    return next.handle(req);
  }
}
