import { Component, OnInit } from '@angular/core';
import { RedesSociales } from 'src/app/interfaces/links.interface';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  validador: boolean = false;

  constructor(private redesSociales: LinksService){}

  ngOnInit(){
    this.redesSociales.obtenerRedes().subscribe(datos =>{
      this.redesSociales.links = datos;
      this.links = datos;
      this.validador = true;
    })
  }

  links: RedesSociales = this.redesSociales.links;

}
