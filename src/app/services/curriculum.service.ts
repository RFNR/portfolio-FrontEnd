import { Injectable } from '@angular/core';
import { Educacion, Experiencia } from '../interfaces/curriculum.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private url: string = environment.baseUrl + '/educacion/datos';
  private urlExp: string = environment.baseUrl + '/experiencia/datos';

  constructor(private http: HttpClient) { }

  obtenerFormaciones():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.url}`)
  }
  
  obtenerExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.urlExp}`)
  }

  educacion!: Educacion[];

  experiencia!: Experiencia[];

  index: number[] = [0]

  id: number | undefined = 0;

  eliminarEducacion(id: number): Observable<Object>{
    this.educacion.splice(this.index[0], 1);
    return this.http.delete(`${this.url}/${id}`)
  }

  eliminarExperiencia(id: number): Observable<Object>{
    this.experiencia.splice(this.index[0], 1);
    return this.http.delete(`${this.urlExp}/${id}`)
  }

  addEducacion(educacion: Educacion): Observable<Object> {
    return this.http.post(`${this.url}`, educacion);
  }
  
  addExperiencia(experiencia: Experiencia): Observable<Object> {
    return this.http.post(`${this.urlExp}`, experiencia);
  }

  modificarEducacion(id: number,educacion: Educacion): Observable<Educacion> {
    const url = `${this.url}/${id}`;
    return this.http.put<Educacion>(url, educacion);
  }

  modificarExperiencia(id: number, experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.urlExp}/${id}`;
    return this.http.put<Experiencia>(url, experiencia);
  }


}
