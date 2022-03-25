import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum Status {
  LOADING = 'LOADING',
  NORMAL = 'NORMAL',
  SUCCESS = 'SUCCESS',
}
@Component({
  selector: 'app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss'],
})
export class AppBtnComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() buttonText!: string;
  @Input() buttonImage!: string;
  @Input() status!: string;
  @Input() className!: string;
  @Input() overRideButtonClass!: boolean;
  @Input() loading!: boolean;
  @Input() customClass!: string;

  @Output() buttonClick = new EventEmitter<boolean>();

  get buttonIsDisabled(): boolean {
    return this.disabled || this.status === Status.LOADING;
  }
  constructor() {}

  ngOnInit(): void {}

  get getCustomClass(): string {
    return this.overRideButtonClass ? this.customClass : '';
  }

  handleClick() {
    this.buttonClick.emit(true);
  }
}
