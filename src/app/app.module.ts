// use this module to bundle pieces together

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Demo1HeadComponent } from './demo1-head/demo1-head.component';
import { Demo1NavComponent } from './demo1-nav/demo1-nav.component';
import { Demo1FormComponent } from './demo1-form/demo1-form.component';
import { Demo1BodyComponent } from './demo1-body/demo1-body.component';
import { Demo1FooterComponent } from './demo1-footer/demo1-footer.component';
import { Demo1CarouselComponent } from './demo1-carousel/demo1-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1HeadComponent,
    Demo1NavComponent,
    Demo1FormComponent,
    Demo1BodyComponent,
    Demo1FooterComponent,
    Demo1CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
