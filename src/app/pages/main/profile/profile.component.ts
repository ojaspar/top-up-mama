import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/app.interface';
import { AuthDataService } from 'src/app/core/services/auth.data.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { SetUserDetails } from 'src/app/store/app.action';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationsService,
    private store: Store
  ) {}

  @Select(AppState.getUserDetails)
  public userInfo$!: Observable<IUser>;

  get userDetails(): IUser {
    let data: any;
    this.userInfo$.subscribe((user) => (data = user));
    return data;
  }

  ngOnInit(): void {
    this.userFormMethod();
  }

  userFormMethod(): void {
    this.userForm = this.fb.group({
      first_name: [this.userDetails?.first_name, Validators.required],
      last_name: [this.userDetails?.last_name, Validators.required],
      email: [
        this.userDetails?.email,
        Validators.compose([Validators.email, Validators.required]),
      ],
      avatar: [this.userDetails?.avatar],
    });
  }
  updateUser(event: boolean) {
    if (event) {
      this.isLoading = true;
      this.store.dispatch(new SetUserDetails(this.userForm.value));
      setTimeout(() => {
        this.isLoading = false;
        this.notificationService.publishMessages(
          'user updated successfully',
          'success'
        );
      }, 2000);
    }
  }
}
