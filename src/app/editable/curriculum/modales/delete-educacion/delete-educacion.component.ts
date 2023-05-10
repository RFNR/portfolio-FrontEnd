import { Component, Input } from '@angular/core';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-delete-educacion',
  templateUrl: './delete-educacion.component.html',
  styleUrls: ['./delete-educacion.component.css']
})
export class DeleteEducacionComponent {
  constructor(private curriculumService: CurriculumService){}
  eliminar(){
    this.curriculumService.eliminarEducacion(this.curriculumService.id!).subscribe();
  }
}
