import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/inicio.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  
  private url: string = environment.baseUrl + '/perfiles/perfil';

  constructor(private http: HttpClient) { }

  perfil: Perfil = {
    perfil: "",
    banner: "",
    profesion: "",
    nombre: ""
  };

  obtenerPerfil():Observable<Perfil>{
    return this.http.get<Perfil>(`${this.url}/1`)
  }
  
  modificarRegistro(perfil: Perfil): Observable<Perfil> {
    const url = `${this.url}/1`;
    return this.http.put<Perfil>(url, perfil);
  }
}
