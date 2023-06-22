import { Injectable, OnInit } from '@angular/core';
import { DatosPersonales, InformacionSobreMi, Intereses } from '../interfaces/sobremi.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService implements OnInit{

  private url: string = environment.baseUrl + "/datospersonales/datos";
  private urlIntereses: string = environment.baseUrl + "/intereses/datos";
  private urlIformacionSobreMi: string = environment.baseUrl + "/informacionsobremi/datos";
  id: number | undefined = 0;
  index = [0]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  obtenerDatosPersonales():Observable<DatosPersonales[]>{
    return this.http.get<DatosPersonales[]>(`${this.url}`)
  }
  modificarDatosPersonales(datosPersonales: DatosPersonales): Observable<DatosPersonales> {
    const url = `${this.url}/1`;
    return this.http.put<DatosPersonales>(url, datosPersonales);
  }

  obtenerIntereses():Observable<Intereses[]>{
    return this.http.get<Intereses[]>(`${this.urlIntereses}`)
  }
  eliminarIntereses(id: number): Observable<Object>{
    this.intereses.splice(this.index[0], 1);
    return this.http.delete(`${this.urlIntereses}/${id}`)
  }
  addInteres(interes: Intereses): Observable<Object> {
    return this.http.post(`${this.urlIntereses}`, interes);
  }

  modificarInformacionSobrMi(informacionsobremi: InformacionSobreMi): Observable<InformacionSobreMi> {
    const url = `${this.urlIformacionSobreMi}/1`;
    return this.http.put<InformacionSobreMi>(url, informacionsobremi);
  }
  obtenerInformacionSobrMi():Observable<InformacionSobreMi[]>{
    return this.http.get<InformacionSobreMi[]>(`${this.urlIformacionSobreMi}`)
  }

  datosPersonales!: DatosPersonales;
  infoSobreMi!: string;
  intereses!: Intereses[];
  iconos!: string[];
 

  icono = "";

  iconosa:string[] = [
    "bi bi-book",
    "fa-solid fa-headphones",
    "fa-solid fa-gamepad",
    "fa-solid fa-plane",
    "fa-solid fa-person-hiking",
    "fa-solid fa-car",
    "bi bi-tiktok",
    "bi bi-currency-bitcoin",
    "bi bi-emoji-sunglasses-fill",
    "bi bi-lightbulb-fill",
    "bi bi-activity",
    "bi bi-android2",
    "bi bi-apple",
    "bi bi-badge-8k",
    "bi bi-bag-fill",
    "bi bi-bank",
    "bi bi-bootstrap-fill",
    "bi bi-camera-video-fill",
    "bi bi-cash-coin",
    "bi bi-chat-left-dots-fill"
  ]
}
