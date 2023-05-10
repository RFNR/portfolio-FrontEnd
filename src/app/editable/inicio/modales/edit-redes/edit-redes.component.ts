import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RedesSociales } from 'src/app/interfaces/links.interface';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-edit-redes',
  templateUrl: './edit-redes.component.html',
  styleUrls: ['./edit-redes.component.css']
})
export class EditRedesComponent implements OnInit{

  validacion: boolean = false;

  links!: RedesSociales;

  @ViewChild('facebook') facebook!: ElementRef<HTMLInputElement>;
  @ViewChild('instagram') instagram!: ElementRef<HTMLInputElement>;
  @ViewChild('linkedin') linkedin!: ElementRef<HTMLInputElement>;
  @ViewChild('correoElectronico') correoElectronico!: ElementRef<HTMLInputElement>;

  constructor(private linksService: LinksService){
   
  }
  ngOnInit() {
    this.linksService.obtenerRedes().subscribe(datos =>{
      this.linksService.links = datos;
      this.links = datos;
      this.validacion = true;
    })
  }

  guardar(){
    this.linksService.links.facebook = this.facebook.nativeElement.value;
    this.linksService.links.instagram = this.instagram.nativeElement.value;
    this.linksService.links.linkedin = this.linkedin.nativeElement.value;
    this.linksService.links.correoElectronico = this.correoElectronico.nativeElement.value;
    this.linksService.modificarRedes(this.linksService.links).subscribe();
  }
  cerrar(){
    this.facebook.nativeElement.value = this.linksService.links.facebook.toString();
    this.instagram.nativeElement.value = this.linksService.links.instagram.toString();
    this.linkedin.nativeElement.value = this.linksService.links.linkedin.toString();
    this.correoElectronico.nativeElement.value = this.linksService.links.correoElectronico.toString();
  }
}
