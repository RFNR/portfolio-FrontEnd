import { Component } from '@angular/core';
import { Educacion, Experiencia } from 'src/app/interfaces/curriculum.interface';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  educacion: Educacion[];
  experiencia: Experiencia[];
  constructor(curriculumService: CurriculumService){
    this.educacion = curriculumService.educacion;
    this.experiencia = curriculumService.experiencia;
  }
}
