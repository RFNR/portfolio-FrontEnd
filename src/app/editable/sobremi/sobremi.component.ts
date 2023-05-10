import { Component, OnInit } from '@angular/core';
import { DatosPersonales, Intereses } from 'src/app/interfaces/sobremi.interface';
import { SobreMiService } from 'src/app/services/sobre-mi.service';
import { Iconos } from '../../interfaces/sobremi.interface';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent implements OnInit{

  validacion = false;

  constructor(private sobreMiService: SobreMiService){
  }

  ngOnInit(): void {
    this.sobreMiService.obtenerDatosPersonales().subscribe(datos => {
      this.sobreMiService.datosPersonales = datos[0];
      this.datosPersonales = datos[0];

      this.sobreMiService.obtenerIntereses().subscribe(datos => {
        this.sobreMiService.intereses = datos;
        this.intereses = datos;
        
        this.sobreMiService.obtenerInformacionSobrMi().subscribe(datos => {
          this.sobreMiService.infoSobreMi = datos[0].mi_texto.toString();
          this.infoSobreMi = datos[0].mi_texto.toString();

          this.validacion = true;
        })
      })
    })
  }

  datosPersonales!: DatosPersonales;
  intereses!: Intereses[];
  infoSobreMi!: string;

  recibirValor(event: string){
    this.infoSobreMi = event;
  }

  recibirDatosPersonales(event: DatosPersonales){
    this.datosPersonales = event;
  }

  modificarIndex(i: number[], id: number | undefined){
    this.sobreMiService.id = id;
    this.sobreMiService.index[0] = i[0];
  }
}