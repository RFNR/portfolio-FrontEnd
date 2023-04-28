import { Component } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyectos[];

  constructor(private proyectosService: ProyectosService){
    this.proyectos = proyectosService.proyectos
  }

}
