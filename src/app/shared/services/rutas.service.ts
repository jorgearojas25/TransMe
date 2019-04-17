import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';
import * as Loki from 'lokijs'

declare var require: any;
const loki = require('lokijs');
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  db: any;
  rutasvagones:any=null;
  rutas:any;

  constructor(private http: HttpClient) { 
    this.db=new loki('rutasvagones.db',{
      autoload: true,
      autosave: true,
      autosaveInterval: 4000,
      persistenceAdapter: 'fs',
      
    });
    
    this.inicializar();


}

public inicializar(){
  let r = this.db.getCollection('rutasvagones');
    if (r == null) {
      this.rutasvagones = this.db.addCollection('rutasvagones');

    } else {
      this.rutasvagones = r;
    }
}


public getJSONrutas(): Observable<any> {
  return this.http.get("./assets/json/rutas.json");
}

public getJSONvagones():Observable<any>{
  return this.http.get("./assets/json/vagones.json");
}



}
