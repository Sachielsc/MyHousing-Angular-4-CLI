// use this module to bundle pieces together

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    Demo1NavComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule {

}
