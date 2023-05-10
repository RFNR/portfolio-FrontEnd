import { Injectable, OnInit } from '@angular/core';
import { Proyectos } from '../interfaces/proyectos.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url: string = "http://localhost:8080/proyectos/datos";
  id: number | undefined = 0;

  constructor(private http: HttpClient) { }
  index: number[] = [0]

  obtenerProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.url}`)
  }

  addProyectos(proyecto: Proyectos): Observable<Object> {
    return this.http.post(`${this.url}`, proyecto);
  }

  eliminarProyecto(id: number): Observable<Object>{
    this.proyectos.splice(this.index[0], 1);
    return this.http.delete(`${this.url}/${id}`)
  }

  modificarProyecto(id: number, proyecto: Proyectos): Observable<Proyectos> {
    const url = `${this.url}/${id}`;
    return this.http.put<Proyectos>(url, proyecto);
  }

  proyectos!: Proyectos[];


  extraerBase64 = async ($event: any) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
  
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      });
  
    } catch (e) {
      return null;
    }
  }
}
