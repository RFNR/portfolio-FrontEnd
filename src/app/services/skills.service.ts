import { Injectable } from '@angular/core';
import { Habilidades } from '../interfaces/habilidades.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private url: string = "http://localhost:8080/habilidades/datos";

  constructor(private http: HttpClient) { }
  index = [0];
  id: number | undefined = 0;
  valorDeRango!: string;
  
  eliminar(){
    this.habilidades.splice(this.index[0], 1);
  }

  habilidades!: Habilidades[];

  obtenerSkillsDesdeLaBase():Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(`${this.url}`)
  }

  addHabilidad(habilidad: Habilidades): Observable<Object> {
    return this.http.post(`${this.url}`, habilidad);
  }

  eliminarHabilidad(id: number): Observable<Object>{
    this.habilidades.splice(this.index[0], 1);
    return this.http.delete(`${this.url}/${id}`)
  }

  modificarHabilidad(id: number, habilidad: Habilidades): Observable<Habilidades> {
    const url = `${this.url}/${id}`;
    return this.http.put<Habilidades>(url, habilidad);
  }

  obtenerHabilidades(): String[] {
    let habilidades: String[] = [];
    for (let i = 0; this.habilidades.length > i; i++) {
      habilidades.push(
        this.habilidades[i].nombre.toLocaleLowerCase().split(' ').join('')
      );
    }
    return habilidades;
  }
  obtenerPorcentajes(): String[] {
    let habilidades: String[] = [];
    for (let i = 0; this.habilidades.length > i; i++) {
      habilidades.push(
        this.habilidades[i].porcentaje.split(' ').join('')
      );
    }
    return habilidades;
  }
}