import { Injectable } from '@angular/core';
import { RedesSociales } from '../interfaces/links.interface';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  links: RedesSociales = {
    facebook: "https://www.facebook.com/ronynogales/",
    instagram: "https://www.instagram.com/ronaldnogales_/",
    linkedin: "https://www.linkedin.com/in/ronald-nogales/",
    correo_electronico: "mailto:ronald.fernr@gmail.com?Subject=Desde%20mi%20portfolio."
  }
}
