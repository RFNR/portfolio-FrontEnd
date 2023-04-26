import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { EditBannerComponent } from './modales/edit-banner/edit-banner.component';
import { EditDatosComponent } from './modales/edit-datos/edit-datos.component';
import { EditPerfilComponent } from './modales/edit-perfil/edit-perfil.component';
import { EditRedesComponent } from './modales/edit-redes/edit-redes.component';



@NgModule({
  declarations: [
    InicioComponent,
    EditBannerComponent,
    EditDatosComponent,
    EditPerfilComponent,
    EditRedesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InicioComponent
  ]
})
export class InicioModule { }
