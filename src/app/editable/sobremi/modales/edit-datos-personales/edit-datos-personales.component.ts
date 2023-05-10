import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/sobremi.interface';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-edit-datos-personales',
  templateUrl: './edit-datos-personales.component.html',
  styleUrls: ['./edit-datos-personales.component.css']
})
export class EditDatosPersonalesComponent implements OnInit{
  
  @ViewChild('edadPersonal') edadPersonal!: ElementRef<HTMLInputElement>;
  @ViewChild('numeroDeTelefono') numeroDeTelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('correoElectronicoDatoPersonal') correoElectronicoDatoPersonal!: ElementRef<HTMLInputElement>;
  @ViewChild('ubicacionSobreMi') ubicacionSobreMi!: ElementRef<HTMLInputElement>;
  @ViewChild('cargoDatoPersonal') cargoDatoPersonal!: ElementRef<HTMLInputElement>;

  @Output() enviarDatosPersonales = new EventEmitter<DatosPersonales>();
  validacion = false;
  datosGuardar!: DatosPersonales;

  constructor(private sobreMiService: SobreMiService){
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.valorPorDefecto = this.sobreMiService.datosPersonales;
      this.validacion = true;
    }, 1000)
    
  }
  valorPorDefecto!: DatosPersonales;

  guardar(){
    this.datosGuardar = {
      id: 1,
      edad: this.edadPersonal.nativeElement.value,
      telefono: this.numeroDeTelefono.nativeElement.value,
      email: this.correoElectronicoDatoPersonal.nativeElement.value,
      ubicacion: this.ubicacionSobreMi.nativeElement.value,
      cargo: this.cargoDatoPersonal.nativeElement.value
    };
    
    if(this.datosGuardar.edad && this.datosGuardar.cargo && this.datosGuardar.email && this.datosGuardar.telefono && this.datosGuardar.ubicacion){
      this.sobreMiService.datosPersonales = this.datosGuardar;
      this.sobreMiService.modificarDatosPersonales(this.datosGuardar).subscribe();
      this.enviarDatosPersonales.emit(this.sobreMiService.datosPersonales)
    }

    this.edadPersonal.nativeElement.value = this.sobreMiService.datosPersonales.edad.toString();
    this.numeroDeTelefono.nativeElement.value = this.sobreMiService.datosPersonales.telefono.toString();
    this.correoElectronicoDatoPersonal.nativeElement.value = this.sobreMiService.datosPersonales.email.toString();
    this.ubicacionSobreMi.nativeElement.value = this.sobreMiService.datosPersonales.ubicacion.toString();
    this.cargoDatoPersonal.nativeElement.value = this.sobreMiService.datosPersonales.cargo.toString();
  }

  cerrar(){
    this.edadPersonal.nativeElement.value = this.sobreMiService.datosPersonales.edad.toString();
    this.numeroDeTelefono.nativeElement.value = this.sobreMiService.datosPersonales.telefono.toString();
    this.correoElectronicoDatoPersonal.nativeElement.value = this.sobreMiService.datosPersonales.email.toString();
    this.ubicacionSobreMi.nativeElement.value = this.sobreMiService.datosPersonales.ubicacion.toString();
    this.cargoDatoPersonal.nativeElement.value = this.sobreMiService.datosPersonales.cargo.toString();
  }
}
