import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-edit-descripcion',
  templateUrl: './edit-descripcion.component.html',
  styleUrls: ['./edit-descripcion.component.css']
})
export class EditDescripcionComponent implements OnInit{

  @ViewChild('textAreaDescripcionSobreMi') textAreaDescripcionSobreMi!: ElementRef<HTMLTextAreaElement>;
  @Output() enviarValor = new EventEmitter<string>();
  validacion = false;
  
  constructor(private sobreMiService: SobreMiService){
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.valorPorDefecto = this.sobreMiService.infoSobreMi;
      this.validacion = true
    }, 1000)
  }

  valorEnviado = "";
  valorPorDefecto!: string;
  valorEscrito!: string;

  guardar(){
    this.valorEscrito = this.textAreaDescripcionSobreMi.nativeElement.value;
    if(this.valorEscrito){
      let valorBD = {
        id: 1,
        mi_texto: this.valorEscrito
      }
      this.sobreMiService.infoSobreMi = this.valorEscrito;
      this.valorEnviado = this.sobreMiService.infoSobreMi;
      this.sobreMiService.modificarInformacionSobrMi(valorBD).subscribe();
      this.enviarValor.emit(this.valorEnviado);
    }
    this.textAreaDescripcionSobreMi.nativeElement.value = this.sobreMiService.infoSobreMi;
    
  }
  cerrar(){
    this.textAreaDescripcionSobreMi.nativeElement.value = this.sobreMiService.infoSobreMi;
  }
  
}
