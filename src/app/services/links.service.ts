import { Injectable } from '@angular/core';
import { RedesSociales } from '../interfaces/links.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  private url: string = environment.baseUrl + '/redes/redsocial';

  obtenerRedes():Observable<RedesSociales>{
    return this.http.get<RedesSociales>(`${this.url}/1`)
  }
  
  modificarRedes(links: RedesSociales): Observable<RedesSociales> {
    const url = `${this.url}/1`;
    return this.http.put<RedesSociales>(url, links);
  }

  links!: RedesSociales;
}
