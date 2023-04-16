import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebpageComponent } from './webpage.component';
import { EditableModule } from './editable/editable.module';
import { NormalModule } from './normal/normal.module';




@NgModule({
  declarations: [
    WebpageComponent
  ],
  imports: [
    CommonModule,
    EditableModule,
    NormalModule
  ],
  exports:[
    WebpageComponent
  ]
})
export class WebpageModule { }
