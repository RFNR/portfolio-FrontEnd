import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {

  imagen: string;
  proyecto: Proyectos;

  @ViewChild('nombreProyecto') nombreProyecto!: ElementRef<HTMLInputElement>;
  @ViewChild('linkProyecto') linkProyecto!: ElementRef<HTMLInputElement>;
  @ViewChild('descripcionProyecto') descripcionProyecto!: ElementRef<HTMLInputElement>;
  @ViewChild('imagenSeleccionada') imagenSeleccionada!: ElementRef<HTMLInputElement>; 

  constructor(private proyectosService: ProyectosService){
    this.imagen = "";
    this.proyecto = {
      nombre: "",
      descripcion: "",
      link: "",
      img: ""
    }
  }

  guardar() {
    this.proyecto = {
      nombre: this.nombreProyecto.nativeElement.value,
      descripcion: this.descripcionProyecto.nativeElement.value,
      link: this.linkProyecto.nativeElement.value,
      img: this.imagen
    }
    if(this.proyecto.nombre && this.proyecto.descripcion && this.proyecto.img && this.proyecto.link){
      let proyectoAdd: any;
      this.proyectosService.addProyectos(this.proyecto).subscribe(datos => {
        proyectoAdd = datos;
        this.proyectosService.proyectos.push(proyectoAdd);
      });
      
    }
    this.nombreProyecto.nativeElement.value = "";
    this.descripcionProyecto.nativeElement.value = "";
    this.linkProyecto.nativeElement.value = "";
    this.imagenSeleccionada.nativeElement.value = ""; 
  }

  cerrar(){
    this.nombreProyecto.nativeElement.value = "";
    this.descripcionProyecto.nativeElement.value = "";
    this.linkProyecto.nativeElement.value = "";
    this.imagenSeleccionada.nativeElement.value = "";
  }

  imagenObtenida(event: any){
    const archivoCapturado: File = event.target.files[0];
    this.proyectosService.extraerBase64(archivoCapturado).then((imagencodigo: any) =>{
      this.imagen = imagencodigo.base;
    })
  }

  
}
