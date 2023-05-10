import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {

  imagen: string = "";

  @Output() enviarDatos = new EventEmitter<string>()
  @ViewChild('perfilUpload') perfilUpload!: ElementRef<HTMLInputElement>
  constructor(private inicioService: InicioService){}

  guardar(){
    if(this.perfilUpload.nativeElement.value){
      this.inicioService.perfil.perfil = this.imagen || this.inicioService.perfil.perfil;
      this.enviarDatos.emit(this.inicioService.perfil.perfil);
      this.inicioService.modificarRegistro(this.inicioService.perfil).subscribe();
    }
    this.perfilUpload.nativeElement.value = "";
  }
  cerrar(){
    this.perfilUpload.nativeElement.value = "";
  }

  imagenObtenida(event: any){
    if(this.perfilUpload.nativeElement.value){
      const archivoCapturado: File = event.target.files[0];
      this.extraerBase64(archivoCapturado).then((imagencodigo: any) =>{
      this.imagen = imagencodigo.base;
      })
    }
    
  }

  extraerBase64 = async ($event: any) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
  
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      });
  
    } catch (e) {
      return null;
    }
  }
}
