import { Component, ElementRef, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  validacion: boolean = false;
  error: boolean = false;
  valoresPorDefecto!: Proyectos;
  
  @ViewChild('imagenProyectoEdit') imagenProyectoEdit!: ElementRef<HTMLImageElement>;
  @ViewChild('nombreProyectoEdit') nombreProyectoEdit!: ElementRef<HTMLButtonElement>;
  
  constructor(private proyectosService: ProyectosService){
  }
  
  ngOnInit(): void {
    this.proyectosService.obtenerProyectos().subscribe(datos =>{
      this.proyectosService.proyectos = datos;
      this.proyectos = datos;
      this.validacion = true;
    })
  }
  proyectos!: Proyectos[];

  modificarIndex(i: number[], id: number | undefined){
    this.proyectosService.index[0] = i[0];
    this.proyectosService.id = id;
  }

  modificarIndexEdit(i: number[], id: number | undefined){
    this.proyectosService.index[0] = i[0];
    this.proyectosService.id = id;
    this.valoresPorDefecto = {
      img: this.proyectosService.proyectos[i[0]].img,
      nombre: this.proyectosService.proyectos[i[0]].nombre,
      link: this.proyectosService.proyectos[i[0]].link,
      descripcion: this.proyectosService.proyectos[i[0]].descripcion
    }
  }

  recibirMensaje(error: boolean){
    this.error = error;
  }

}

