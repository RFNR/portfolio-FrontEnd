import { Component } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/sobremi.interface';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent {
  
  constructor(private sobreMiService: SobreMiService){
  }

  infoSobreMi = this.sobreMiService.infoSobreMi;
  intereses = this.sobreMiService.intereses;
  datosPersonales = this.sobreMiService.datosPersonales;
 
  recibirValor(event: string){
    this.infoSobreMi = event;
  }

  recibirDatosPersonales(event: DatosPersonales){
    this.datosPersonales = event;
  }

  modificarIndex(i: number[]){
    this.sobreMiService.index[0] = i[0];
  }
}
