import { Component } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-delete-proyecto',
  templateUrl: './delete-proyecto.component.html',
  styleUrls: ['./delete-proyecto.component.css']
})
export class DeleteProyectoComponent {
  constructor(private proyectosService: ProyectosService){}
  eliminar(){
    this.proyectosService.eliminarProyecto(this.proyectosService.id!).subscribe();
  }
}
