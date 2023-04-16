import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  habilidadesAnimadas = [false, false, false, false, false, false];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.efectoHabilidades.bind(this));
  }

  efectoHabilidades() {
    let skills = this.el.nativeElement.querySelector('#skills');
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      this.habilidadesAnimadas = [true, true, true, true, true, true];
    }
    else {
      this.habilidadesAnimadas = [false, false, false, false, false, false];
    }
  }

}

