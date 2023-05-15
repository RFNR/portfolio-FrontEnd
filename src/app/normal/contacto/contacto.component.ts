import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  validacion: boolean = false;
  linkIframe: any;
  mapa: any;
  myForm!: FormGroup;

  constructor(private contactoService: ContactoService, private sanitizer: DomSanitizer, private formBuilder: FormBuilder) {}

  async ngOnInit() {

    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tema: ['', Validators.required],
      mensaje: ['', Validators.required]
    });

    this.mapa = await this.contactoService.obtenerMapa();
    this.linkIframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapa);
    this.validacion = true;
  }

  submitForm() {
    if (this.myForm.valid) {
      const formulario = this.myForm.value;
      this.contactoService.addFormulario(formulario).subscribe();
    }
    this.myForm.reset();
  }

}

