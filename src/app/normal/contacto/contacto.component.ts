import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  validacion: boolean = false;
  linkIframe: any;
  mapa: any;

  constructor(private contactoService: ContactoService, private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.mapa = await this.contactoService.obtenerMapa();
    this.linkIframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapa);
    this.validacion = true;
  }

}

