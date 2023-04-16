import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpageModule } from './webpage/webpage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
