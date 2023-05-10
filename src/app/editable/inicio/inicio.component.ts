import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Perfil } from 'src/app/interfaces/inicio.interface';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  
  @ViewChild('fotoDePerfil') fotoDePerfil!: ElementRef<HTMLImageElement>;
  @ViewChild('fotoDeBanner') fotoDeBanner!: ElementRef<HTMLImageElement>;
  @ViewChild('nombreDatoPersonalInicio') nombreDatoPersonalInicio!: ElementRef<HTMLHeadingElement>;
  @ViewChild('profesionDatoPersonalInicio') profesionDatoPersonalInicio!: ElementRef<HTMLHeadingElement>;

  validador: boolean = false;

  constructor(private inicioService: InicioService){
  }
  
  ngOnInit() {
    this.inicioService.obtenerPerfil().subscribe(datos => {
      this.inicioService.perfil = datos;
      this.perfil = datos;
      this.validador = true;
    });
    
  }

  perfil: Perfil = this.inicioService.perfil;

  recibirDatosPerfil(event: string){
    this.fotoDePerfil.nativeElement.src = event;
  }
  recibirDatosBanner(event: string){
    this.fotoDeBanner.nativeElement.src = event;
  }

  eventoParaActualizacion(str: any){
    this.nombreDatoPersonalInicio.nativeElement.textContent = this.inicioService.perfil.nombre;
    this.profesionDatoPersonalInicio.nativeElement.textContent = this.inicioService.perfil.profesion;
  }
}