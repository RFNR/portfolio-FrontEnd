import { Component, ElementRef, ViewChild } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-edit-redes',
  templateUrl: './edit-redes.component.html',
  styleUrls: ['./edit-redes.component.css']
})
export class EditRedesComponent {

  linkFacebook: String;
  linkInstagram: String;
  linkLinkedin: String;
  linkCorreoElectronico: String;

  @ViewChild('facebook') facebook!: ElementRef<HTMLInputElement>;
  @ViewChild('instagram') instagram!: ElementRef<HTMLInputElement>;
  @ViewChild('linkedin') linkedin!: ElementRef<HTMLInputElement>;
  @ViewChild('correoElectronico') correoElectronico!: ElementRef<HTMLInputElement>;

  constructor(private linksService: LinksService){
    this.linkFacebook = linksService.links.facebook;
    this.linkInstagram = linksService.links.instagram;
    this.linkLinkedin = linksService.links.linkedin;
    this.linkCorreoElectronico = linksService.links.correo_electronico;
  }

  guardar(){
    this.linksService.links.facebook = this.facebook.nativeElement.value;
    this.linksService.links.instagram = this.instagram.nativeElement.value;
    this.linksService.links.linkedin = this.linkedin.nativeElement.value;
    this.linksService.links.correo_electronico = this.correoElectronico.nativeElement.value;
  }
}
