import { Component } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  nombre: string;
  profesion: string;
  facebook: String;
  instagram: String;
  linkedin: String;
  correo: String;
  constructor(private redesSociales: LinksService, inicioService: InicioService){
    this.nombre = inicioService.nombre;
    this.profesion = inicioService.profesion;
    this.facebook = this.redesSociales.links.facebook;
    this.instagram = this.redesSociales.links.instagram;
    this.linkedin = this.redesSociales.links.linkedin;
    this.correo = this.redesSociales.links.correo_electronico;
  }
}
