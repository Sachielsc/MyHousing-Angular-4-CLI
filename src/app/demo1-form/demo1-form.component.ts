import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
const now = new Date();

@Component({
  selector: 'app-demo1-form',
  templateUrl: './demo1-form.component.html',
  styleUrls: ['./demo1-form.component.css']
})
export class Demo1FormComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  constructor() { }
  ngOnInit() {
  }
}
