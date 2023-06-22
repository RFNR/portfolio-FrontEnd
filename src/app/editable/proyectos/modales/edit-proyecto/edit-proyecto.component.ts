import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit{
  @Input() valoresPorDefecto: Proyectos = {
    img: "",
    nombre: "",
    descripcion: "",
    link: ""
  };
  validacion: boolean = false;
  @ViewChild('nombreProyectoEdit') nombreProyectoEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('linkProyectoEdit') linkProyectoEdit!: ElementRef<HTMLInputElement>;
  @ViewChild('descripcionProyectoEdit') descripcionProyectoEdit!: ElementRef<HTMLInputElement>;

  constructor(private proyectosService: ProyectosService) {
  }
  ngOnInit(){
    setTimeout(() => {
      this.valoresPorDefecto = this.proyectosService.proyectos[this.proyectosService.index[0]]
      this.validacion = true
    }, 1000)
  }

  imagenObtenida(event: any){
    const archivoCapturado: File = event.target.files[0];
    this.proyectosService.extraerBase64(archivoCapturado).then((imagencodigo: any) =>{
      this.valoresPorDefecto.img = imagencodigo.base;
    })
  }

  guardar() {
    this.valoresPorDefecto = {
      id: this.proyectosService.id,
      nombre: this.nombreProyectoEdit.nativeElement.value,
      descripcion: this.descripcionProyectoEdit.nativeElement.value,
      link: this.linkProyectoEdit.nativeElement.value,
      img: this.valoresPorDefecto.img || this.proyectosService.proyectos[this.proyectosService.index[0]].img
    }
    if(this.valoresPorDefecto.nombre && this.valoresPorDefecto.descripcion && this.valoresPorDefecto.img && this.valoresPorDefecto.link){
       this.proyectosService.proyectos[this.proyectosService.index[0]] = this.valoresPorDefecto;
       this.proyectosService.modificarProyecto(this.proyectosService.id!, this.valoresPorDefecto).subscribe();
    }
    this.nombreProyectoEdit.nativeElement.value = this.proyectosService.proyectos[this.proyectosService.index[0]].nombre.toString();
    this.descripcionProyectoEdit.nativeElement.value = this.proyectosService.proyectos[this.proyectosService.index[0]].descripcion.toString();
    this.linkProyectoEdit.nativeElement.value = this.proyectosService.proyectos[this.proyectosService.index[0]].link.toString();
  }

  cerrar(){
    this.nombreProyectoEdit.nativeElement.value = this.proyectosService.proyectos[this.proyectosService.index[0]].nombre.toString();
    this.descripcionProyectoEdit.nativeElement.value = this.proyectosService.proyectos[this.proyectosService.index[0]].descripcion.toString();
    this.linkProyectoEdit.nativeElement.value = this.proyectosService.proyectos[this.proyectosService.index[0]].link.toString();
  }
}