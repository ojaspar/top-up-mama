import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/shared/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
})
export class AppSidebarComponent implements OnInit {
  @Input() authenticatedUser: any;
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.storageService.clear();
    this.router.navigate(['/auth/login']);
  }
}
