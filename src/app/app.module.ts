// use this module to bundle pieces together

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { Demo1Datepicker } from './demo1-datepicker/demo1-datepicker.component';
import { Demo1BodyComponent } from './demo1-body/demo1-body.component';
import { Demo1HeadComponent } from './demo1-head/demo1-head.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1HeadComponent,
    Demo1Datepicker,
    Demo1BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
