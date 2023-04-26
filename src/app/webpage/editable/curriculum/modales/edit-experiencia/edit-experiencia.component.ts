import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent {
  @Input() valoresPorDefecto = {
    cargo: '',
    lugar: '',
    periodo: '',
    descripcion: '',
  };

  @ViewChild('cargoEdit') cargoEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('lugarEdit') lugarEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('periodoExperienciaEdit') periodoExperienciaEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('descripcionExperienciaEdit') descripcionExperienciaEdit!: ElementRef<HTMLTextAreaElement>;

  constructor(private curriculumService: CurriculumService) {
  }

  editar() {
    this.curriculumService.experiencia[this.curriculumService.index[0]] = {
      cargo: this.cargoEdit.nativeElement.value,
      lugar: this.lugarEdit.nativeElement.value,
      periodo: this.periodoExperienciaEdit.nativeElement.value,
      descripcion: this.descripcionExperienciaEdit.nativeElement.value,
    };
  }
}
