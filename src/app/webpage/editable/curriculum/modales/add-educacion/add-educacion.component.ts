import { Component, ElementRef, ViewChild } from '@angular/core';
import { Educacion } from 'src/app/interfaces/curriculum.interface';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent {
  constructor(private curriculumService: CurriculumService){}

  @ViewChild('titulo') titulo!: ElementRef<HTMLInputElement>; 
  @ViewChild('establecimiento') establecimiento!: ElementRef<HTMLInputElement>; 
  @ViewChild('periodoEducacion') periodoEducacion!: ElementRef<HTMLInputElement>; 
  @ViewChild('descripcionEducacion') descripcionEducacion!: ElementRef<HTMLTextAreaElement>; 

  guardar(){
    
    let formacion: Educacion = {
      area: this.titulo.nativeElement.value,
      establecimiento: this.establecimiento.nativeElement.value,
      periodo: this.periodoEducacion.nativeElement.value,
      descripcion: this.descripcionEducacion.nativeElement.value
    }

    this.curriculumService.educacion.push(formacion);

    // Reseteando valores
    this.titulo.nativeElement.value = "";
    this.establecimiento.nativeElement.value = "";
    this.periodoEducacion.nativeElement.value = "";
    this.descripcionEducacion.nativeElement.value = "";
  }
}
