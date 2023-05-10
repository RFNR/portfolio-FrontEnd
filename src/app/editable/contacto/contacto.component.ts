import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {

  value: String = "";
  mapa: any;
  validacion: boolean = false;
  linkIframe: any;

  @ViewChild('valorIframe') valorIframe!: ElementRef<HTMLIFrameElement>; // Selecciono el elemento iframe cargado por defecto.
  @ViewChild('valorTextArea') valorTextArea!: ElementRef<HTMLTextAreaElement>;

  constructor(private contactoService: ContactoService, private sanitizer: DomSanitizer) {
    // Injecto el servicio
  }

  async ngOnInit() {
    this.mapa = await this.contactoService.obtenerMapa();
    this.linkIframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapa);
    this.validacion = true;
  }

  guardar() { 
    this.value = this.valorTextArea.nativeElement.value; // String -> Si no se envia nada, se obtiene un string vacio
    let arrayDevuelto = this.value.match(/src="([^"]*)"/);
    if(arrayDevuelto){
      this.contactoService.linkIframe.src = arrayDevuelto[1] // Guardamos en la variable src del servicio el src del iframe 
      this.valorIframe.nativeElement.src = this.contactoService.linkIframe.src; // Actualizamos el valor del iframe

      this.contactoService.modificarLink(this.contactoService.linkIframe).subscribe();
    }
    this.valorTextArea.nativeElement.value = ""; // Reseteamos el value del iframe
  }

  cerrar(){
    this.valorTextArea.nativeElement.value = "";
  }
}
