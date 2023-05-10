import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.css']
})
export class EditDatosComponent implements OnInit{
  nombre!: string;
  profesion!: string;
  validacion: boolean = false;

  @ViewChild('nombreIdentificador') nombreIdentificador!: ElementRef<HTMLInputElement>;
  @ViewChild('profesionIdentificador') profesionIdentificador!: ElementRef<HTMLInputElement>;

  @Output() eventoParaActualizacion = new EventEmitter<string>()

  constructor(private inicioService: InicioService){
  }
  ngOnInit() {
    this.inicioService.obtenerPerfil().subscribe(datos =>{
      this.inicioService.perfil = datos;
      this.nombre = this.inicioService.perfil.nombre;
      this.profesion = this.inicioService.perfil.profesion;
      this.validacion = true;
    })
  }
  editar(){
    this.inicioService.perfil.nombre = this.nombreIdentificador.nativeElement.value;
    this.inicioService.perfil.profesion = this.profesionIdentificador.nativeElement.value; 
    this.inicioService.modificarRegistro(this.inicioService.perfil).subscribe();
    this.eventoParaActualizacion.emit("Este mensaje hace que se ejecute el metodo en el padre de este componente.")
  }
  cerrar(){
    this.nombreIdentificador.nativeElement.value = this.inicioService.perfil.nombre;
    this.profesionIdentificador.nativeElement.value = this.inicioService.perfil.profesion;
  }
}
