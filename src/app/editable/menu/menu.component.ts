import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router){}
  estado: boolean = false;

  mostrarOcultarMenu(): void {
    this.estado ? this.estado = false : this.estado = true;
}

  seleccionar(): void { //oculto el menu una vez que selecciono una opcion
    this.estado = false;
  }
  cerrarSesion(){
    localStorage.removeItem('tokenAdmin');
    this.router.navigate(['/user'])
  }
}

