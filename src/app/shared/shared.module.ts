import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBtnComponent } from './components/app-btn/app-btn.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppBtnComponent, AppInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AppBtnComponent, AppInputComponent],
})
export class SharedModule {}
