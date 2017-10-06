import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadHome() {
    this.router.navigate(['/home']);
  }

  onLoadSearch() {
    // put some process here
    this.router.navigate(['/search']);
  }

  onLoadBooking() {
    // put some process here
    this.router.navigate(['/booking']);
  }
}
