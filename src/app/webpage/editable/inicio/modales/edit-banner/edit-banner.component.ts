import { Component, EventEmitter, Output } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent {
  
  imagen: string = "";

  @Output() enviarDatos = new EventEmitter<string>()
  constructor(private inicioService: InicioService){}

  guardar(){
    this.inicioService.perfil = this.imagen;
    this.enviarDatos.emit(this.inicioService.perfil);
  }

  imagenObtenida(event: any){
    const archivoCapturado: File = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagencodigo: any) =>{
      this.imagen = imagencodigo.base;
    })
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
