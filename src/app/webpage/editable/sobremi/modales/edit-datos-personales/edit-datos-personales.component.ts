import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/sobremi.interface';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-edit-datos-personales',
  templateUrl: './edit-datos-personales.component.html',
  styleUrls: ['./edit-datos-personales.component.css']
})
export class EditDatosPersonalesComponent {
  
  @ViewChild('edadPersonal') edadPersonal!: ElementRef<HTMLInputElement>;
  @ViewChild('numeroDeTelefono') numeroDeTelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('correoElectronicoDatoPersonal') correoElectronicoDatoPersonal!: ElementRef<HTMLInputElement>;
  @ViewChild('ubicacionSobreMi') ubicacionSobreMi!: ElementRef<HTMLInputElement>;
  @ViewChild('cargoDatoPersonal') cargoDatoPersonal!: ElementRef<HTMLInputElement>;

  @Output() enviarDatosPersonales = new EventEmitter<DatosPersonales>();

  constructor(private sobreMiService: SobreMiService){
  }

  valorPorDefecto = {
    valorPorDefectoEdad: this.sobreMiService.datosPersonales.edad,
    valorPorDefectoTelefono: this.sobreMiService.datosPersonales.telefono,
    valorPorDefectoCorreo: this.sobreMiService.datosPersonales.email,
    valorPorDefectoUbicacion: this.sobreMiService.datosPersonales.ubicacion,
    valorPorDefectoCargo: this.sobreMiService.datosPersonales.cargo,
  };

  guardar(){
    this.sobreMiService.datosPersonales = {
      edad: this.edadPersonal.nativeElement.value,
      telefono: this.numeroDeTelefono.nativeElement.value,
      email: this.correoElectronicoDatoPersonal.nativeElement.value,
      ubicacion: this.ubicacionSobreMi.nativeElement.value,
      cargo: this.cargoDatoPersonal.nativeElement.value
    };

    this.enviarDatosPersonales.emit(this.sobreMiService.datosPersonales);
  }

  cerrar(){
    this.valorPorDefecto = {
      valorPorDefectoEdad: this.sobreMiService.datosPersonales.edad,
      valorPorDefectoTelefono: this.sobreMiService.datosPersonales.telefono,
      valorPorDefectoCorreo: this.sobreMiService.datosPersonales.email,
      valorPorDefectoUbicacion: this.sobreMiService.datosPersonales.ubicacion,
      valorPorDefectoCargo: this.sobreMiService.datosPersonales.cargo,
    };
  }
}
