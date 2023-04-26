import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
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

  habilidadesAnimadas = Array(this.habilidades.length);

  @HostListener('window:scroll', ['$event'])
  scrollZone() {

    let skills = this.el.nativeElement.querySelector('#skills');
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {

      for (let i = 0; this.habilidadesAnimadas.length > i; i++) {
        this.habilidadesAnimadas[i] = true;
        const style = document.createElement('style');
        style.innerHTML = `
                          .skills .skill .${this.obtenerHabilidades()[i]}{
                            width: 0%;
                            animation: 2s ${this.obtenerHabilidades()[i]} forwards;
                          }
                          
                          @keyframes ${this.obtenerHabilidades()[i]} {
                            0%{width: 0%;}
                            100%{width: ${this.obtenerPorcentajes()[i]};}
                          }
`;
        document.head.appendChild(style);
      }
    }
  }
}
