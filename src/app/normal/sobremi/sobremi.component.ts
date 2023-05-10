import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  infoSobreMi: String = `
  Hola, soy Ronald Nogales, tengo 25 años y soy de Córdoba. Soy desarrollador web full stack.
  Me apasiona crear soluciones digitales únicas y personalizadas a través del arte y la ciencia de la
  programación.
  Mi dedicación a la programación me ha permitido adquirir habilidades para transformar conceptos
  abstractos en soluciones concretas y efectivas. Como desarrollador web full stack, soy consciente de la
  importancia de crear sitios web y aplicaciones que no solo sean funcionales, sino también seguros y
  escalables.
  Creo firmemente en la importancia de aprender y crecer en mi carrera, y estoy comprometido a mantenerme
  actualizado con las últimas tecnologías y tendencias del mercado para ofrecer siempre la mejor solución
  para mis clientes y usuarios finales.
  Soy consciente de que la tecnología tiene el poder de cambiar el mundo, y estoy emocionado de ser parte
  de este cambio a través de mi trabajo. Mi objetivo es seguir explorando nuevas posibilidades en el campo
  de la programación. Espero te guste este sitio web. Saludos!
  `; 

  intereses = [
    {
      interes:"JUEGOS", 
      icono: "fa-solid fa-gamepad"
    },
    {
      interes:"MUSICA", 
      icono: "fa-solid fa-headphones"
    },
    {
      interes:"VIAJAR", 
      icono: "fa-solid fa-plane"
    },
    {
      interes:"DEPORTE", 
      icono: "fa-solid fa-person-hiking"
    },
    {
      interes:"AUTOS", 
      icono: "fa-solid fa-car"
    }
  ]
}
