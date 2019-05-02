import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsereventService {

  constructor(private fb3:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:49810/api';

  eventoForm=this.fb3.group({
    id:[''], 
    eventoID:[''],
    evento:null,
    usuarioID:[''],
    usuario:null
  });

  register() {
    var body = {
      id: this.eventoForm.value.id,
      eventoID: this.eventoForm.value.eventoID,
      evento: this.eventoForm.value.evento,
      usuarioID: this.eventoForm.value.usuarioID,
      usuario: this.eventoForm.value.usuario
    };
    return this.http.post(this.BaseURI + '/UsuarioEvento', body);
  }
}
