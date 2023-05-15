import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/interfaces/inicio.interface';
import { InicioService } from 'src/app/services/inicio.service';
import { LinksService } from 'src/app/services/links.service';
import { RedesSociales } from '../../interfaces/links.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  validador: boolean = false;

  constructor(private redesSociales: LinksService, private inicioService: InicioService){
  }

  ngOnInit(){
    this.inicioService.obtenerPerfil().subscribe(datos => {
      this.inicioService.perfil = datos;
      this.perfil = datos;
      console.log(datos)
    });
    this.redesSociales.obtenerRedes().subscribe(datos =>{
      this.redesSociales.links = datos;
      this.links = datos;
      this.validador = true;
    })
  }

  perfil: Perfil = this.inicioService.perfil;
  links: RedesSociales = this.redesSociales.links;

}
