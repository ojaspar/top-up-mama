import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss'],
})
export class AppDashboardComponent implements OnInit {
  authenticatedUser: any;
  constructor() {}

  ngOnInit(): void {}
}