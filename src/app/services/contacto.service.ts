import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.2389917098!2d-64.2767443640717!3d-31.399280322265614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1681485893043!5m2!1ses-419!2sar";

  constructor(private sanitizer: DomSanitizer) { 
  }

  obtenerMapa(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }
}
