import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-paginator',
  templateUrl: './app-paginator.component.html',
  styleUrls: ['./app-paginator.component.scss'],
})
export class AppPaginatorComponent implements OnInit {
  @Input() data: any;
  @Output() currentIndex = new EventEmitter<any>();

  numbers!: number[];
  constructor() {}

  ngOnInit(): void {
    this.numbers = Array(this.data?.total_pages)
      .fill(this.data?.total_pages)
      .map((x, i) => i + 1);
  }
  paginatorIndex(index: number): void {
    this.currentIndex.emit(index);
  }
}
