import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobremiComponent } from './sobremi.component';
import { AddInteresComponent } from './modales/add-interes/add-interes.component';
import { DeleteInteresComponent } from './modales/delete-interes/delete-interes.component';
import { EditDatosPersonalesComponent } from './modales/edit-datos-personales/edit-datos-personales.component';
import { EditDescripcionComponent } from './modales/edit-descripcion/edit-descripcion.component';



@NgModule({
  declarations: [
    SobremiComponent,
    AddInteresComponent,
    DeleteInteresComponent,
    EditDatosPersonalesComponent,
    EditDescripcionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SobremiComponent
  ]
})
export class SobremiModule { }
