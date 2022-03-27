import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { UserDataService } from 'src/app/core/services/user.data.service';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  userForm!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userDataService: UserDataService,
    private fb: FormBuilder,
    private notificationService: NotificationsService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot?.params?.id;
  }

  ngOnInit(): void {
    this.userFormMethod();
    this.getUserDetails(this.id);
  }

  getUserDetails(id: number) {
    this.userDataService.getSingleUser(id).subscribe((res) => {
      console.log(res);
    });
  }

  userFormMethod(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }
  updateUser(event: boolean): void {
    if (event) {
      this.isLoading = true;
      this.userDataService.updateJob(this.userForm.value, this.id).subscribe(
        (res) => {
          if (res) {
            this.userForm.reset();
            this.router.navigate(['/users']);
            this.notificationService.publishMessages(
              'Job updated successfully',
              'success'
            );
          }
        },
        (err) => {
          if (err) this.isLoading = false;
        }
      );
    }
  }
}
