import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface IFormControlOption {
  name: string | number | null;
  field: string | number;
  msg?: string;
  type?: string | number;
  ngClassName?: string | (string | number)[] | undefined;
}

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit {
  @Input() parentGroup!: FormGroup;
  @Input() options: IFormControlOption = {
    name: null,
    field: '',
  };
  @Input() id!: string;
  @Input() value = '';
  @Input() placeholder!: string;
  @Output() keyupEnter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  addText() {
    this.keyupEnter.emit(this.parentGroup.value.name);
  }
}
