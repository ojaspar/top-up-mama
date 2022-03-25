import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBtnComponent } from './components/app-btn/app-btn.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppPasswordComponent } from './components/app-password/app-password.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppBtnComponent, AppInputComponent, AppPasswordComponent],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [AppBtnComponent, AppInputComponent, AppPasswordComponent],
})
export class SharedModule {}
