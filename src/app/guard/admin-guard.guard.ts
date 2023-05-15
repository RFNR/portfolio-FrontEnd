import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private router: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('tokenAdmin') && localStorage.getItem('token')) {
        // Si las variables 'tokenAdmin' y 'token' existen en el local storage, permite el acceso a la ruta
        return true;
      } else {
        // Si las variables no existen, redirige al usuario a otra ruta (por ejemplo, la página de inicio de sesión)
        return this.router.createUrlTree(['/user']);
      }
  }
  
}
