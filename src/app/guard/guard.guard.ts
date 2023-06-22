import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const authData = localStorage.getItem('authData')!; // Obtener los datos de autenticación del localStorage o de la fuente de datos correspondiente

    if (authData) {
      return true; // Permitir el acceso a la ruta "editar"
    } else {
      this.router.navigate(['/']);
      return false; // Impedir el acceso a la ruta "editar"
    }
  }
}
