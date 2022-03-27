import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/app.interface';
import { UserDataService } from 'src/app/core/services/user.data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}
  users: IUser[] = [];
  paginatorData: any;
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(page: number = 1) {
    console.log('heee');
    this.userDataService.getAllUsers(page).subscribe((res) => {
      if (res) {
        const { data, total, page, per_page, total_pages } = res;
        console.log(res);
        this.users = data;
        this.paginatorData = {
          page,
          total_pages,
          total,
          per_page: page === 1 ? per_page : per_page * page,
        };
      }
    });
  }
  getIndex(index: number): void {
    this.getAllUsers(index);
  }
  deleteUser(index: number | string) {
    this.userDataService.deleteUser(index).subscribe(() => {
      this.users = this.users.filter((x) => x.id !== index);
    });
  }
}
