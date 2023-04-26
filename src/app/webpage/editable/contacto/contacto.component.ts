import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  value: String = "";
  constructor(private contactoService: ContactoService) {
    // Injecto el servicio
  }
  @ViewChild('valorIframe') valorIframe!: ElementRef<HTMLIFrameElement>; // Selecciono el elemento iframe cargado por defecto.
  @ViewChild('valorTextArea') valorTextArea!: ElementRef<HTMLTextAreaElement>;

  linkIframe = this.contactoService.obtenerMapa(); //  Guardamos el src del iframe que se cargara por defecto.



  guardarCodigoHtml() { 
    this.value = this.valorTextArea.nativeElement.value; // String -> Si no se envia nada, se obtiene un string vacio
    let arrayDevuelto = this.value.match(/src="([^"]*)"/);

    if(arrayDevuelto){
      this.contactoService.src = arrayDevuelto[1] // Guardamos en la variable src del servicio el src del iframe 
      this.valorIframe.nativeElement.src = this.contactoService.src; // Actualizamos el valor del iframe
    }

    this.valorTextArea.nativeElement.value = ""; // Reseteamos el value del iframe
  }

}
