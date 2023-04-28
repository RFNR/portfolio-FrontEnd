import { Component, ElementRef, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyectos[];
  valoresPorDefecto: Proyectos = {
    img: "",
    nombre: "",
    descripcion: "",
    link: ""
  }

  @ViewChild('imagenProyectoEdit') imagenProyectoEdit!: ElementRef<HTMLImageElement>;
  @ViewChild('nombreProyectoEdit') nombreProyectoEdit!: ElementRef<HTMLButtonElement>;

  constructor(private proyectosService: ProyectosService){
    this.proyectos = proyectosService.proyectos;
  }

  modificarIndex(i: number[]){
    this.proyectosService.index[0] = i[0];
  }

  modificarIndexEdit(i: number[]){
    this.proyectosService.index[0] = i[0];
    this.valoresPorDefecto = {
      img: this.proyectosService.proyectos[i[0]].img,
      nombre: this.proyectosService.proyectos[i[0]].nombre,
      link: this.proyectosService.proyectos[i[0]].link,
      descripcion: this.proyectosService.proyectos[i[0]].descripcion
    }
  }

}

