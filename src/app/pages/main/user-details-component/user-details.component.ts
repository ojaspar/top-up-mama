import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user.data.service';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userDataService: UserDataService
  ) {
    this.id = this.activatedRoute.snapshot?.params?.id;
  }

  ngOnInit(): void {
    this.getUserDetails(this.id);
  }

  getUserDetails(id: number) {
    this.userDataService.getSingleUser(id).subscribe(() => {
      this;
    });
  }
}
