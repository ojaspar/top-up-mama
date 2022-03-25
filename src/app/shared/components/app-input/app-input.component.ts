import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormControlOption } from 'src/app/core/interfaces/app.interface';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit {
  @Input() parentGroup!: FormGroup;
  @Input() options!: IFormControlOption;
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
