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
    if(this.cargoEdit.nativeElement.value && this.lugarEdit.nativeElement.value && this.periodoExperienciaEdit.nativeElement.value && this.descripcionExperienciaEdit.nativeElement.value){

      this.curriculumService.experiencia[this.curriculumService.index[0]] = {
        cargo: this.cargoEdit.nativeElement.value,
        lugar: this.lugarEdit.nativeElement.value,
        periodo: this.periodoExperienciaEdit.nativeElement.value,
        descripcion: this.descripcionExperienciaEdit.nativeElement.value,
      };
    }
    
  }
  cerrar(){
    this.cargoEdit.nativeElement.value = this.curriculumService.experiencia[this.curriculumService.index[0]].cargo.toString();
    this.lugarEdit.nativeElement.value = this.curriculumService.experiencia[this.curriculumService.index[0]].lugar.toString(); 
    this.periodoExperienciaEdit.nativeElement.value = this.curriculumService.experiencia[this.curriculumService.index[0]].periodo.toString(); 
    this.descripcionExperienciaEdit.nativeElement.value = this.curriculumService.experiencia[this.curriculumService.index[0]].descripcion.toString(); 
  }
}
