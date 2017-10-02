// use this module to bundle pieces together

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { Demo1HeadComponent } from './demo1-head/demo1-head.component';
import { Demo1NavComponent } from './demo1-nav/demo1-nav.component';
import { Demo1Datepicker } from './demo1-datepicker/demo1-datepicker.component';
import { Demo1BodyComponent } from './demo1-body/demo1-body.component';
import { Demo1FooterComponent } from './demo1-footer/demo1-footer.component';
import { Demo1CarouselComponent } from './demo1-carousel/demo1-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1HeadComponent,
    Demo1NavComponent,
    Demo1Datepicker,
    Demo1BodyComponent,
    Demo1FooterComponent,
    Demo1CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
