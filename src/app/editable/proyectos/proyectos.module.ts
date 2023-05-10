import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { AddProyectoComponent } from './modales/add-proyecto/add-proyecto.component';
import { DeleteProyectoComponent } from './modales/delete-proyecto/delete-proyecto.component';
import { EditProyectoComponent } from './modales/edit-proyecto/edit-proyecto.component';



@NgModule({
  declarations: [
    ProyectosComponent,
    AddProyectoComponent,
    DeleteProyectoComponent,
    EditProyectoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProyectosComponent
  ]
})
export class ProyectosModule { }
