import { Component, OnInit } from '@angular/core';
import { Educacion, Experiencia } from 'src/app/interfaces/curriculum.interface';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit{
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

  ngOnInit(): void {
    this.curriculumService.obtenerFormaciones().subscribe(datos =>{
      this.curriculumService.educacion = datos;
      this.educacion = datos;
    })

    this.curriculumService.obtenerExperiencias().subscribe(datos =>{
      this.curriculumService.experiencia = datos;
      this.experiencia = datos;
    })
  }
  
  educacion: Educacion[] = this.curriculumService.educacion;
  experiencia: Experiencia[] = this.curriculumService.experiencia;

  modificarIndexEliminarExperiencia(i: number[], id: number | undefined){
    this.curriculumService.index[0] = i[0];
    this.curriculumService.id = id;
  }

  modificarIndexEliminarEducacion(i: number[], id: number | undefined){
    this.curriculumService.index[0] = i[0];
    this.curriculumService.id = id;
  }

  modificarIndexEducacion(i: number[], id: number | undefined){
    this.curriculumService.index[0] = i[0];
    this.curriculumService.id = id;
    this.datosEditEducacion = {
      area: this.curriculumService.educacion[i[0]].area.toString(),
      establecimiento: this.curriculumService.educacion[i[0]].establecimiento.toString(),
      periodo: this.curriculumService.educacion[i[0]].periodo.toString(),
      descripcion: this.curriculumService.educacion[i[0]].descripcion.toString()
    }
  }
  
  modificarIndexExperiencia(i: number[], id: number | undefined){
    this.curriculumService.index[0] = i[0];
    this.curriculumService.id = id;
    this.datosEditExperiencia = {
      cargo: this.curriculumService.experiencia[i[0]].cargo.toString(),
      lugar: this.curriculumService.experiencia[i[0]].lugar.toString(),
      periodo: this.curriculumService.experiencia[i[0]].periodo.toString(),
      descripcion: this.curriculumService.experiencia[i[0]].descripcion.toString()
    }
  }

}

