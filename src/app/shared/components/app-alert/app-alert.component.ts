import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss'],
})
export class AppAlertComponent implements OnInit {
  notification: any;
  constructor(private alert: NotificationsService) {}

  ngOnInit() {
    this.alert.alertStatus.subscribe((res) => {
      this.notification = res;
    });
  }

  dismiss() {
    this.alert.dismissMessage();
  }
}
