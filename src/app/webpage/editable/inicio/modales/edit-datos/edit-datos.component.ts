import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.css']
})
export class EditDatosComponent {
  nombre: string = this.inicioService.nombre;
  profesion: string = this.inicioService.profesion;

  @ViewChild('nombreIdentificador') nombreIdentificador!: ElementRef<HTMLInputElement>;
  @ViewChild('profesionIdentificador') profesionIdentificador!: ElementRef<HTMLInputElement>;

  @Output() eventoParaActualizacion = new EventEmitter<string>()

  constructor(private inicioService: InicioService){
  }

  editar(){
    this.inicioService.nombre = this.nombreIdentificador.nativeElement.value;
    this.inicioService.profesion = this.profesionIdentificador.nativeElement.value; 
    this.eventoParaActualizacion.emit("Este mensaje hace que se ejecute el metodo en el padre de este componente.")
  }

}
