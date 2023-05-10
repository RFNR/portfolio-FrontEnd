import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditableModule } from './editable/editable.module';
import { NormalModule } from './normal/normal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EditableModule,
    NormalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
