import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
const now = new Date();

@Component({
  selector: 'app-demo1-datepicker',
  templateUrl: './demo1-datepicker.component.html',
  styleUrls: ['./demo1-datepicker.component.css']
})
export class Demo1Datepicker implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  constructor() { }
  ngOnInit() {
  }
}
