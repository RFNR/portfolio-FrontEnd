import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-edit-descripcion',
  templateUrl: './edit-descripcion.component.html',
  styleUrls: ['./edit-descripcion.component.css']
})
export class EditDescripcionComponent {

  @ViewChild('textAreaDescripcionSobreMi') textAreaDescripcionSobreMi!: ElementRef<HTMLTextAreaElement>;
  @Output() enviarValor = new EventEmitter<string>();

  constructor(private sobreMiService: SobreMiService){
  }

  valorEnviado = "";
  valorPorDefecto = this.sobreMiService.infoSobreMi

  guardar(){
    this.sobreMiService.infoSobreMi = this.textAreaDescripcionSobreMi.nativeElement.value;
    this.valorEnviado = this.sobreMiService.infoSobreMi;
    this.textAreaDescripcionSobreMi.nativeElement.value = this.sobreMiService.infoSobreMi;
    this.enviarValor.emit(this.valorEnviado);
  }
  cerrar(){
    this.textAreaDescripcionSobreMi.nativeElement.value = this.sobreMiService.infoSobreMi;
  }
  
}
