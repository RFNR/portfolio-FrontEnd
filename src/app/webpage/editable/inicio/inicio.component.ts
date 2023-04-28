import { Component, ElementRef, ViewChild } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  banner: string = this.inicioService.banner; 
  nombre = this.inicioService.nombre;
  profesion = this.inicioService.profesion;
  perfil: string = this.inicioService.perfil;

  @ViewChild('fotoDePerfil') fotoDePerfil!: ElementRef<HTMLImageElement>;
  @ViewChild('fotoDeBanner') fotoDeBanner!: ElementRef<HTMLImageElement>;
  @ViewChild('nombreDatoPersonalInicio') nombreDatoPersonalInicio!: ElementRef<HTMLHeadingElement>;
  @ViewChild('profesionDatoPersonalInicio') profesionDatoPersonalInicio!: ElementRef<HTMLHeadingElement>;

  constructor(private inicioService: InicioService){
  }

  recibirDatosPerfil(event: string){
    this.fotoDePerfil.nativeElement.src = event;
  }
  recibirDatosBanner(event: string){
    this.fotoDeBanner.nativeElement.src = event;
  }

  eventoParaActualizacion(str: any){
    this.nombreDatoPersonalInicio.nativeElement.textContent = this.inicioService.nombre;
    this.profesionDatoPersonalInicio.nativeElement.textContent = this.inicioService.profesion;
  }
}