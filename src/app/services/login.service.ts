import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) { }

  login(datos: Login): Observable<Object> {
    console.log(datos)
    return this.http.post(`${this.url}`, datos);
  }

}
