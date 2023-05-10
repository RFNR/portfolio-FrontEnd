import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit{

  validacion = false;
  habilidad: Habilidades = {
    nombre: '',
    porcentaje: ''
  }
  index: number = 0;

  constructor(private el: ElementRef, private skillsService: SkillsService) {}

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

  cambiarIndexEliminar(i: number[], id: any){
    this.skillsService.index = i;
    this.skillsService.id = id;
  }
  cambiarIndexEditar(i: number[], id: any){
    this.skillsService.index = i;
    this.skillsService.id = id;
    this.habilidad = {
      nombre: this.skillsService.habilidades[i[0]].nombre,
      porcentaje: this.skillsService.habilidades[i[0]].porcentaje
    }
  }

  activarAnimacion(event: string){
    this.habilidadesAnimadas = Array(this.skillsService.habilidades.length);
    this.scrollZone()
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