import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  obtenerUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}`)
  }
}
