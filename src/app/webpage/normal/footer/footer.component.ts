import { Component } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private redesSociales: LinksService){}

  facebook: String = this.redesSociales.links.facebook
  instagram: String = this.redesSociales.links.instagram
  linkedin: String = this.redesSociales.links.linkedin
  correo: String = this.redesSociales.links.correo_electronico

}
