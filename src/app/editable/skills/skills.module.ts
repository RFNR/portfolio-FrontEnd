import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { AddHabilidadComponent } from './modales/add-habilidad/add-habilidad.component';
import { DeleteHabilidadComponent } from './modales/delete-habilidad/delete-habilidad.component';
import { EditHabilidadComponent } from './modales/edit-habilidad/edit-habilidad.component';



@NgModule({
  declarations: [
    SkillsComponent,
    AddHabilidadComponent,
    DeleteHabilidadComponent,
    EditHabilidadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SkillsComponent
  ]
})
export class SkillsModule { }
