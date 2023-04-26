import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';
import { AddEducacionComponent } from './modales/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './modales/add-experiencia/add-experiencia.component';
import { DeleteEducacionComponent } from './modales/delete-educacion/delete-educacion.component';
import { DeleteExperienciaComponent } from './modales/delete-experiencia/delete-experiencia.component';
import { EditEducacionComponent } from './modales/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './modales/edit-experiencia/edit-experiencia.component';



@NgModule({
  declarations: [
    CurriculumComponent,
    AddEducacionComponent,
    AddExperienciaComponent,
    DeleteEducacionComponent,
    DeleteExperienciaComponent,
    EditEducacionComponent,
    EditExperienciaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CurriculumComponent
  ]
})
export class CurriculumModule { }
