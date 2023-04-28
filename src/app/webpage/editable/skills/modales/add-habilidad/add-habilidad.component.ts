import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent {
  
  habilidad: Habilidades = {
    nombre: '',
    porcentaje: '',
  }

  @ViewChild('nombreHabilidad') nombreHabilidad!: ElementRef<HTMLInputElement>;
  @ViewChild('rango') rango!: ElementRef<HTMLInputElement>;
  
  @Output() activarAnimacion = new EventEmitter<string>;

  constructor(private skillsService: SkillsService){
  }

  valorDeRango: number = 0;

  cambiosEnElInput(event: any) {
    this.valorDeRango = event.target.value;
  }

  guardar(){
    this.habilidad = {
      nombre: this.nombreHabilidad.nativeElement.value,
      porcentaje: this.rango.nativeElement.value + "%"
    }
    if(this.habilidad.nombre){
      this.skillsService.habilidades.push(this.habilidad) 
      this.activarAnimacion.emit("Activar animacion");
    }
    this.nombreHabilidad.nativeElement.value = "";
    this.rango.nativeElement.value = "0";
    this.valorDeRango = 0;
  }

  cerrar(){
    this.nombreHabilidad.nativeElement.value = "";
    this.rango.nativeElement.value = "0";
    this.valorDeRango = 0;
  }
}
