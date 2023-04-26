import { Component, ElementRef, ViewChild } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/curriculum.interface';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent {
  constructor(private curriculumService: CurriculumService){}

  @ViewChild('cargo') cargo!: ElementRef<HTMLInputElement>; 
  @ViewChild('lugar') lugar!: ElementRef<HTMLInputElement>; 
  @ViewChild('periodoExperiencia') periodoExperiencia!: ElementRef<HTMLInputElement>; 
  @ViewChild('descripcionExperiencia') descripcionExperiencia!: ElementRef<HTMLTextAreaElement>; 

  guardar(){
    
    let experiencia: Experiencia = {
      cargo: this.cargo.nativeElement.value,
      lugar: this.lugar.nativeElement.value,
      periodo: this.periodoExperiencia.nativeElement.value,
      descripcion: this.descripcionExperiencia.nativeElement.value
    }

    this.curriculumService.experiencia.push(experiencia);

    // Reseteando datos
    this.cargo.nativeElement.value = "";
    this.lugar.nativeElement.value = "";
    this.periodoExperiencia.nativeElement.value = "";
    this.descripcionExperiencia.nativeElement.value = "";

  }
}
