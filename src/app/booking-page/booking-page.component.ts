import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadHome() {
    this.router.navigate(['/home']);
  }

  onLoadDetails() {
    // put some process here
    this.router.navigate(['/details']);
  }

  onLoadPayment() {
    // put some process here
    this.router.navigate(['/payment']);
  }
}
