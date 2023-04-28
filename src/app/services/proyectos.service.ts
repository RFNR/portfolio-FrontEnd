import { Injectable } from '@angular/core';
import { Proyectos } from '../interfaces/proyectos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }
  index: number[] = [0]
  eliminarProyecto(){
    this.proyectos.splice(this.index[0], 1);
  }
  proyectos: Proyectos[] = [
    {
      img: "../../../../assets/p1.jpg",
      nombre: "Proximamente",
      descripcion: "...",
      link: "http://localhost:4200/"
    },
    {
      img: "../../../../assets/p2.jpg",
      nombre: "Proximamente",
      descripcion: "...",
      link: "http://localhost:4200/"
    },
    {
      img: "../../../../assets/p3.jpg",
      nombre: "Proximamente",
      descripcion: "...",
      link: "http://localhost:4200/"
    },
    {
      img: "../../../../assets/p4.jpg",
      nombre: "Proximamente",
      descripcion: "...",
      link: "http://localhost:4200/"
    },
    {
      img: "../../../../assets/p5.jpg",
      nombre: "Proximamente",
      descripcion: "...",
      link: "http://localhost:4200/"
    },
    {
      img: "../../../../assets/p6.jpg",
      nombre: "Proximamente",
      descripcion: "...",
      link: "http://localhost:4200/"
    }
  ];

  extraerBase64 = async ($event: any) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
  
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      });
  
    } catch (e) {
      return null;
    }
  }
}
