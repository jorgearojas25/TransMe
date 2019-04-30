import { Injectable } from '@angular/core';
import { Eventos } from './eventos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  
  readonly BaseURI = 'http://localhost:49810/api';
  list: Eventos[];
  
  constructor(private http:HttpClient) { }

  getEventos(){
    this.http.get(this.BaseURI+'/Evento')
      .toPromise()
      .then(res=> this.list = res as Eventos[])
  }
}
