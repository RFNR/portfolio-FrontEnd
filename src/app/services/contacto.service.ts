import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, firstValueFrom } from 'rxjs';
import { LinkIframe } from '../interfaces/usuario.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { 
  }

  private url: string = environment.baseUrl + '/iframe/src';

  urlNoSegura: any;

  linkIframe: LinkIframe = {
    src: "nada",
  }

  obtenerLink():Observable<LinkIframe[]>{
    return this.http.get<LinkIframe[]>(`${this.url}`)
  }

  async obtenerMapa(){
    const dato = await firstValueFrom(this.obtenerLink());
    this.linkIframe.src = dato[0].src;
    return this.linkIframe.src;
  }

  modificarLink(detallesSrc: LinkIframe): Observable<LinkIframe> {
    const url = `${this.url}/1`;
    return this.http.put<LinkIframe>(url, detallesSrc);
  }

}