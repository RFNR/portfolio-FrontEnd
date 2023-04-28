import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent {
  @Input() valoresPorDefecto = {
    area: '',
    establecimiento: '',
    periodo: '',
    descripcion: '',
  };

  @ViewChild('tituloEdit') tituloEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('establecimientoEdit') establecimientoEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('periodoEducacionEdit') periodoEducacionEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('descripcionEducacionEdit') descripcionEducacionEdit!: ElementRef<HTMLTextAreaElement>;

  constructor(private curriculumService: CurriculumService) {
  }

  editar() {
    if(this.tituloEdit.nativeElement.value && this.establecimientoEdit.nativeElement.value && this.periodoEducacionEdit.nativeElement.value && this.descripcionEducacionEdit.nativeElement.value){
      
      this.curriculumService.educacion[this.curriculumService.index[0]] = {
        area: this.tituloEdit.nativeElement.value,
        establecimiento: this.establecimientoEdit.nativeElement.value,
        periodo: this.periodoEducacionEdit.nativeElement.value,
        descripcion: this.descripcionEducacionEdit.nativeElement.value,
      };
    }
    
  }
  cerrar(){
    this.tituloEdit.nativeElement.value =  this.curriculumService.educacion[this.curriculumService.index[0]].area.toString();
    this.establecimientoEdit.nativeElement.value =  this.curriculumService.educacion[this.curriculumService.index[0]].establecimiento.toString();
    this.periodoEducacionEdit.nativeElement.value =  this.curriculumService.educacion[this.curriculumService.index[0]].periodo.toString();
    this.descripcionEducacionEdit.nativeElement.value =  this.curriculumService.educacion[this.curriculumService.index[0]].descripcion.toString();
  }
}
