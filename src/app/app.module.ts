import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
