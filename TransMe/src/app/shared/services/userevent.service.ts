import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Userevent } from './userevent.model';
@Injectable({
  providedIn: 'root'
})
export class UsereventService {

  list: Userevent[];
  constructor(private fb3:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:49810/api';

  getList(){
    this.http.get(this.BaseURI+'/UsuarioEvento/MisEventos')
      .toPromise()
      .then(res=> this.list = res as Userevent[])
  }


}
