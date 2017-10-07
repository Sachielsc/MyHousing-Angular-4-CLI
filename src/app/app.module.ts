// use this module to bundle pieces together

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// router components
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-page/search-result/search-result.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

// unit components
import { SearchConditionComponent } from './search-page/search-condition/search-condition.component';
import { NavButtonGroupComponent } from './nav-button-group/nav-button-group.component';
import { RouterTestComponent } from './router-test/router-test.component';
import { Demo1CarouselComponent } from './demo1-carousel/demo1-carousel.component';
import { Demo1FooterComponent } from './demo1-footer/demo1-footer.component';
import { Demo1NavComponent } from './demo1-nav/demo1-nav.component';
import { Demo1Datepicker } from './demo1-datepicker/demo1-datepicker.component';
import { Demo1BodyComponent } from './demo1-body/demo1-body.component';
import { Demo1HeadComponent } from './demo1-head/demo1-head.component';

const appRoutes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path:'home', component: HomePageComponent},
  { path:'search', component: SearchPageComponent, children: [
    { path: 'searchresult', component: SearchResultComponent }
  ]},
  { path:'details', component: DetailsPageComponent},
  { path:'booking', component: BookingPageComponent},
  { path:'payment', component: PaymentPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    Demo1HeadComponent,
    Demo1Datepicker,
    Demo1BodyComponent,
    Demo1CarouselComponent,
    HomePageComponent,
    SearchPageComponent,
    DetailsPageComponent,
    BookingPageComponent,
    PaymentPageComponent,
    SearchResultComponent,
    SearchConditionComponent,
    NavButtonGroupComponent,
    RouterTestComponent,
    Demo1FooterComponent,
    Demo1NavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
