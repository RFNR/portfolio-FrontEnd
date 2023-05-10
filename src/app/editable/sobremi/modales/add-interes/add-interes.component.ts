import { Component, ElementRef, ViewChild } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-add-interes',
  templateUrl: './add-interes.component.html',
  styleUrls: ['./add-interes.component.css']
})
export class AddInteresComponent {

  @ViewChild('nombreInteres') nombreInteres!: ElementRef<HTMLInputElement>;

  constructor(private sobreMiService: SobreMiService){
  }

  iconos: string[] = this.sobreMiService.iconos;

  cambiarColor(i: number[]){
    this.sobreMiService.index = i;
    let nombreDeLaClase = document.querySelector(`.fondo${this.sobreMiService.index[0]}`) as HTMLDivElement;

    if(nombreDeLaClase.style.backgroundColor !== 'rgb(28, 182, 152)'){

      for(let i = 0; this.sobreMiService.iconos.length > i ; i++){
        let comprobarFondo = document.querySelector(`.fondo${i}`) as HTMLDivElement;
        if(comprobarFondo.style.backgroundColor === 'rgb(28, 182, 152)'){
          comprobarFondo.style.backgroundColor = ""
        }
      }
      nombreDeLaClase.style.backgroundColor = "rgb(28, 182, 152)";
      this.sobreMiService.icono = this.sobreMiService.iconos[i[0]];
    } else {
      nombreDeLaClase.style.backgroundColor = "";
    }
  }

  guardar(){
    if(this.nombreInteres.nativeElement.value && this.sobreMiService.icono){
      this.sobreMiService.intereses.push({
        interes: this.nombreInteres.nativeElement.value, 
        icono: this.sobreMiService.icono
    })
    }
    this.resetear();
  }
  cerrar(){
    this.resetear();
  }
  resetear(){
    this.nombreInteres.nativeElement.value = "";
    for(let i = 0; this.sobreMiService.iconos.length > i ; i++){
      let resetear = document.querySelector(`.fondo${i}`) as HTMLDivElement;
      resetear.style.backgroundColor = ""
    }
    this.sobreMiService.icono = "";
  }
}
