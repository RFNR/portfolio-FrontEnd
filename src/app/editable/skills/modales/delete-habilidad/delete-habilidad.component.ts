import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-delete-habilidad',
  templateUrl: './delete-habilidad.component.html',
  styleUrls: ['./delete-habilidad.component.css']
})
export class DeleteHabilidadComponent {
  constructor(private skillsService: SkillsService){}
  eliminar(){
    this.skillsService.eliminar();
  }

}