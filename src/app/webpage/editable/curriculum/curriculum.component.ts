import { Component } from '@angular/core';
import { Educacion, Experiencia } from 'src/app/interfaces/curriculum.interface';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  datosEditExperiencia = {
    cargo: "",
    lugar: "",
    periodo: "",
    descripcion: ""
  } 
  datosEditEducacion = {
    area: "",
    establecimiento: "",
    periodo: "",
    descripcion: ""
  } 
  constructor(private curriculumService: CurriculumService){
  }

  educacion: Educacion[] = this.curriculumService.educacion;
  experiencia: Experiencia[] = this.curriculumService.experiencia;

  modificarIndexExperiencia(i: number[]){
    this.curriculumService.index[0] = i[0];
    this.datosEditExperiencia = {
      cargo: this.curriculumService.experiencia[i[0]].cargo.toString(),
      lugar: this.curriculumService.experiencia[i[0]].lugar.toString(),
      periodo: this.curriculumService.experiencia[i[0]].periodo.toString(),
      descripcion: this.curriculumService.experiencia[i[0]].descripcion.toString()
    }
  }

  modificarIndexEliminarExperiencia(i: number[]){
    this.curriculumService.index[0] = i[0];
  }

  modificarIndexEliminarEducacion(i: number[]){
    this.curriculumService.index[0] = i[0];
  }
  modificarIndexEducacion(i: number[]){
    this.curriculumService.index[0] = i[0];
    this.datosEditEducacion = {
      area: this.curriculumService.educacion[i[0]].area.toString(),
      establecimiento: this.curriculumService.educacion[i[0]].establecimiento.toString(),
      periodo: this.curriculumService.educacion[i[0]].periodo.toString(),
      descripcion: this.curriculumService.educacion[i[0]].descripcion.toString()
    }
  }

}

