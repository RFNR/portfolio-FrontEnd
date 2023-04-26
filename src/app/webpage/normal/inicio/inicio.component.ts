import { Component } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  nombre = "RONALD NOGALES";
  profesion = "Desarrollador Web Full Stack";

  constructor(private redesSociales: LinksService){}

  facebook: String = this.redesSociales.links.facebook
  instagram: String = this.redesSociales.links.instagram
  linkedin: String = this.redesSociales.links.linkedin
  correo: String = this.redesSociales.links.correo_electronico


}
