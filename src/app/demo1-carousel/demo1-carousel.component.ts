import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo1-carousel',
  templateUrl: './demo1-carousel.component.html',
  styleUrls: ['./demo1-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class Demo1CarouselComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
  ngOnInit() {
  }
}
