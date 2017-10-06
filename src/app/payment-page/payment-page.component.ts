import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadHome() {
    this.router.navigate(['/home']);
  }

  onLoadBooking() {
    // put some process here
    this.router.navigate(['/booking']);
  }
}
