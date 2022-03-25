import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormControlOption } from 'src/app/core/interfaces/app.interface';

@Component({
  selector: 'app-password',
  templateUrl: './app-password.component.html',
  styleUrls: ['./app-password.component.scss'],
})
export class AppPasswordComponent implements OnInit {
  /**
   * undefined and null error on angular 11.
   * @param parentGroupField angular 11 flags undefined and null hence the reason for adding an OR value.
   *
   */

  text: string = 'password';
  @Input() id!: string;
  @Input() parentGroup!: FormGroup;
  @Input() options!: IFormControlOption;
  @Output() keyupEnter = new EventEmitter<any>();
  @Input() placeholder!: string;
  show: string = 'password';

  constructor() {}

  ngOnInit() {}

  showPassword() {
    this.show === 'password' ? (this.show = 'text') : (this.show = 'password');
  }

  addText() {
    if (this.parentGroup.value.name) {
      this.keyupEnter.emit(this.parentGroup.value.name);
    }
  }
}
