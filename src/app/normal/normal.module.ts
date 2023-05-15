import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalComponent } from './normal.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NormalComponent,
    MenuComponent,
    InicioComponent,
    SobremiComponent,
    CurriculumComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports:[
    NormalComponent,
    FooterComponent
  ]
})
export class NormalModule { }
