import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  
  constructor(private el: ElementRef, private skillsService: SkillsService) {
  }

  habilidades: Habilidades[] = this.skillsService.habilidades;

  obtenerHabilidades(): String[] {
    return this.skillsService.obtenerHabilidades();
  }
  obtenerPorcentajes(): String[] {
    return this.skillsService.obtenerPorcentajes();
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
