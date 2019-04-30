import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Categoria } from "./categoria.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  formData: Categoria;
  readonly BaseURI = 'http://localhost:49810/api';
  list: Categoria[];

  constructor(private http:HttpClient) { }

  getList(){
    this.http.get(this.BaseURI+'/Categoria')
      .toPromise()
      .then(res=> this.list = res as Categoria[])
  }

}
