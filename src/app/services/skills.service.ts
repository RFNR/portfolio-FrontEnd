import { Injectable } from '@angular/core';
import { Habilidades } from '../interfaces/habilidades.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  index = [0];

  eliminar(){
    this.habilidades.splice(this.index[0], 1);
  }

  habilidades: Habilidades[] = [
    {
      nombre: 'Javascript',
      porcentaje: '50%',
    },
    {
      nombre: 'HTML CSS',
      porcentaje: '70%',
    },
    {
      nombre: 'Angular',
      porcentaje: '40%',
    },
    {
      nombre: 'Java',
      porcentaje: '40%',
    },
    {
      nombre: 'Spring Boot',
      porcentaje: '30%',
    },
    {
      nombre: 'MySql',
      porcentaje: '50%',
    },
  ];

  obtenerHabilidades(): String[] {
    let habilidades: String[] = [];
    for (let i = 0; this.habilidades.length > i; i++) {
      habilidades.push(
        this.habilidades[i].nombre.toLocaleLowerCase().split(' ').join('')
      );
    }
    return habilidades;
  }
  obtenerPorcentajes(): String[] {
    let habilidades: String[] = [];
    for (let i = 0; this.habilidades.length > i; i++) {
      habilidades.push(
        this.habilidades[i].porcentaje.split(' ').join('')
      );
    }
    return habilidades;
  }
}
