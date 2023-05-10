import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent {

  @Input() habilidad: Habilidades = {
    nombre: '',
    porcentaje: '',
  }

  @ViewChild('nombreHabilidadEdit') nombreHabilidadEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('rangoEdit') rangoEdit!: ElementRef<HTMLInputElement>;

  @Output() activarAnimacion = new EventEmitter<string>();

  constructor(private skillsService: SkillsService){
  }

  valorDeRango = "0";

  cambiosEnElInput(event: any) {
    this.valorDeRango = event.target.value;
  }

  guardar(){
    this.habilidad = {
      nombre: this.nombreHabilidadEdit.nativeElement.value,
      porcentaje: this.rangoEdit.nativeElement.value + "%"
    }
    if(this.habilidad.nombre && this.rangoEdit.nativeElement.value !== "0"){
      this.skillsService.habilidades[this.skillsService.index[0]] = this.habilidad 
      this.activarAnimacion.emit("Activar animacion");
    }
    this.valorDeRango = "0";
    this.rangoEdit.nativeElement.value = "0";
    this.nombreHabilidadEdit.nativeElement.value = this.skillsService.habilidades[this.skillsService.index[0]].nombre
  }
  cerrar(){
    this.valorDeRango = "0";
    this.rangoEdit.nativeElement.value = "0";
    this.nombreHabilidadEdit.nativeElement.value = this.skillsService.habilidades[this.skillsService.index[0]].nombre
  }

}