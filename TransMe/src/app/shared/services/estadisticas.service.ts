import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estadisticas } from './estadisticas';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  list:Estadisticas[];
  readonly BaseURI = 'http://localhost:49810/api';

  constructor(private http:HttpClient) { }
   
  getEventos(){
    this.http.get(this.BaseURI+'/Evento/estad')
      .toPromise()
      .then(res=> this.list = res as Estadisticas[])
  }
}
