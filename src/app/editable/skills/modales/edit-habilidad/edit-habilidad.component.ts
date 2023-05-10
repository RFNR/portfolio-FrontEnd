import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Habilidades } from 'src/app/interfaces/habilidades.interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit{

  @Input() habilidad: Habilidades = {
    nombre: '',
    porcentaje: ''
  }
  validacion = false;
  @ViewChild('nombreHabilidadEdit') nombreHabilidadEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('rangoEdit') rangoEdit!: ElementRef<HTMLInputElement>;
  
  @Output() activarAnimacion = new EventEmitter<string>();
  
  constructor(private skillsService: SkillsService){
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.habilidad = this.skillsService.habilidades[this.skillsService.index[0]]
      this.validacion = true
    }, 1000)
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

      let habilidadSeleccionada = this.skillsService.habilidades[this.skillsService.index[0]];
      habilidadSeleccionada.nombre = this.habilidad.nombre; 
      habilidadSeleccionada.porcentaje = this.habilidad.porcentaje; 
      this.skillsService.modificarHabilidad(this.skillsService.id!, habilidadSeleccionada).subscribe();
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