import { Component } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyectos[] = [
    {
      img: "../../../../assets/p1.jpg",
      nombre: "Proximamente",
      descripcion: "..."
    },
    {
      img: "../../../../assets/p2.jpg",
      nombre: "Proximamente",
      descripcion: "..."
    },
    {
      img: "../../../../assets/p3.jpg",
      nombre: "Proximamente",
      descripcion: "..."
    },
    {
      img: "../../../../assets/p4.jpg",
      nombre: "Proximamente",
      descripcion: "..."
    },
    {
      img: "../../../../assets/p5.jpg",
      nombre: "Proximamente",
      descripcion: "..."
    },
    {
      img: "../../../../assets/p6.jpg",
      nombre: "Proximamente",
      descripcion: "..."
    }
  ];

}

