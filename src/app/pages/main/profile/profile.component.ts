import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthDataService } from 'src/app/core/services/auth.data.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  userForm!: FormGroup;
  user: any;
  constructor(
    private fb: FormBuilder,
    private authDataService: AuthDataService,
    private notificationService: NotificationsService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.user = JSON.parse(this.storageService.getItem('authenticatedUser'));
    console.log(this.user);
  }

  ngOnInit(): void {
    this.userFormMethod();
  }

  userFormMethod(): void {
    this.userForm = this.fb.group({
      first_name: [this.user?.first_name, Validators.required],
      last_name: [this.user?.last_name, Validators.required],
      email: [
        this.user?.email,
        Validators.compose([Validators.email, Validators.required]),
      ],
      image: [this.user?.image],
    });
  }
  updateUser(event: boolean) {
    if (event) {
      console.log(this.userForm.value);
      this.storageService.setItem(
        'authenticatedUser',
        JSON.stringify(this.userForm.value)
      );
    }
  }
}
