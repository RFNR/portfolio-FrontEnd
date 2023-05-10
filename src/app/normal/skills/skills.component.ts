import { Component, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit{

  validacion = false;
  
  constructor(private el: ElementRef, private skillsService: SkillsService) {
  }
  ngOnInit(): void {
    this.skillsService.obtenerSkillsDesdeLaBase().subscribe(datos => {
      this.skillsService.habilidades = datos;
      this.habilidades = datos;
      this.habilidadesAnimadas = Array(this.habilidades.length);
      this.validacion = true;
    })
  }

  habilidades!: Habilidades[];
  habilidadesAnimadas: any;

  obtenerHabilidades(): String[] {
    return this.skillsService.obtenerHabilidades();
  }
  obtenerPorcentajes(): String[] {
    return this.skillsService.obtenerPorcentajes();
  }

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