import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/app.interface';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { SetUserDetails } from 'src/app/store/app.action';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
})
export class AppSidebarComponent implements OnInit {
  @Input() authenticatedUser: any;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private store: Store
  ) {}

  @Select(AppState.getUserDetails)
  public userInfo$!: Observable<IUser>;

  ngOnInit(): void {}

  get userDetails(): IUser {
    let data: any;
    this.userInfo$.subscribe((user) => (data = user));
    return data;
  }

  logout(): void {
    this.store.dispatch(
      new SetUserDetails({
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
      })
    );
    this.storageService.clear();
    this.router.navigate(['/auth/login']);
  }
}
