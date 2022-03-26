import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBtnComponent } from './components/app-btn/app-btn.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppPasswordComponent } from './components/app-password/app-password.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppPaginatorComponent } from './components/app-paginator/app-paginator.component';

@NgModule({
  declarations: [
    AppBtnComponent,
    AppAlertComponent,
    AppInputComponent,
    AppPasswordComponent,
    NavbarComponent,
    AppDashboardComponent,
    AppSidebarComponent,
    AppPaginatorComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    AppBtnComponent,
    AppAlertComponent,
    AppInputComponent,
    AppPasswordComponent,
    NavbarComponent,
    AppSidebarComponent,
    AppDashboardComponent,
    AppPaginatorComponent,
  ],
})
export class SharedModule {}
