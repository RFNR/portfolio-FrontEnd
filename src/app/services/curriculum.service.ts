import { Injectable } from '@angular/core';
import { Educacion, Experiencia } from '../interfaces/curriculum.interface';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor() { }

  educacion: Educacion[] = [
    {
      area: "Secundario",
      establecimiento: "Instituto Secundario Olegario Victor Andrade",
      periodo: "2008 - 2015",
      descripcion: "Egrese con el titulo de bachiller en administracion y economia."
    },
    {
      area: "Ingenieria",
      establecimiento: "Universidad Nacional de Córdoba",
      periodo: "2017 - 2020",
      descripcion: "Curse 3 años Ingeniera en Computacion."
    },
    {
      area: "Ingenieria",
      establecimiento: "Universidad Nacional de Córdoba",
      periodo: "2020 - Actualidad",
      descripcion: "Actualmente cursando Ingenieria Civil."
    }
  ];

  experiencia: Experiencia[] = [
    {
      cargo: "Front Developer",
      lugar: "FreeCodeCamp",
      periodo: "1 mes",
      descripcion: "Desarrolle los proyectos propuestos en la pagina y asi obtuve el titulo de Responsive Web Desing."
    }
  ];

  index: number[] = [0]

  eliminarEducacion(){
    this.educacion.splice(this.index[0], 1);
  }

  eliminarExperiencia(){
    this.experiencia.splice(this.index[0], 1);
  }
  
}
