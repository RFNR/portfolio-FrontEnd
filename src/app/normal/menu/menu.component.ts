import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  estado: boolean = false;
  mostrarOcultarMenu(): void {
    this.estado ? this.estado = false : this.estado = true;
  }

  seleccionar(): void { //oculto el menu una vez que selecciono una opcion
    this.estado = false;
  }
}
