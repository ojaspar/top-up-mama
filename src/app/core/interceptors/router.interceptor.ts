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
    if (!req.headers.has('Content-Type')) {
      this.token = JSON.parse(this.storage.getItem('access_token'));
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    }
    req = this.addAuthenticationToken(req);
    return next.handle(req);
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!this.token) return request;
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.token),
    });
  }
}
