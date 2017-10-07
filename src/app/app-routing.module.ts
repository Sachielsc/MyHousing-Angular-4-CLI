// use this module to bundle pieces together

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-page/search-result/search-result.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

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
    HomePageComponent,
    SearchPageComponent,
    DetailsPageComponent,
    BookingPageComponent,
    PaymentPageComponent,
    SearchResultComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule {

}
