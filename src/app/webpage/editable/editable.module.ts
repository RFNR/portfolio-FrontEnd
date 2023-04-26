import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditableComponent } from './editable.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CurriculumModule } from './curriculum/curriculum.module';
import { InicioModule } from './inicio/inicio.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SkillsModule } from './skills/skills.module';
import { SobremiModule } from './sobremi/sobremi.module';

import { NormalModule } from '../normal/normal.module';



@NgModule({
  declarations: [
    EditableComponent,
    MenuComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    NormalModule,
    CurriculumModule,
    InicioModule,
    ProyectosModule,
    SkillsModule,
    SobremiModule
  ],
  exports:[
    EditableComponent
  ]
})
export class EditableModule { }
