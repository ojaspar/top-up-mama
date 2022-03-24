import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/shared/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const authenticatedToken: string | undefined =
      this.storageService.getItem('access_token');
    if (!authenticatedToken) {
      this.storageService.removeItem('access_token');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
