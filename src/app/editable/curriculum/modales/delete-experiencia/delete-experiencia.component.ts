import { Component, Input } from '@angular/core';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-delete-experiencia',
  templateUrl: './delete-experiencia.component.html',
  styleUrls: ['./delete-experiencia.component.css']
})
export class DeleteExperienciaComponent {
  constructor(private curriculumService: CurriculumService){}
  eliminar(){
    this.curriculumService.eliminarExperiencia(this.curriculumService.id!).subscribe();
  }
}
