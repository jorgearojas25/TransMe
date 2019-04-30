import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



declare var $: any;
const troncales: any[] = [];
const troncalesFiltradas: any[] = [];
const estaciones: any[] = [];
const latLon: any[] = [];
const longitudes: any[] = [];
const jsonDA: any[] = [];
let estacionesTroncales: any[] = [];
let estacionesTroncalesFiltradas: any[] = [];
const troncalesFiltradasColor: any[] = [];
@Injectable({
  providedIn: 'root'
})
export class TroncalesService {


  private TroncalBoton: any[] = [];
  private latLonMapa: any[] = [];

  constructor(private http: HttpClient) {

    $.getJSON('http://datosabiertos.bogota.gov.co/api/3/action/datastore_search?resource_id=d0775af7-1706-4404-8bea-387194287d73&limit=1000', function(data) {

      $.each(data.result.records, function(i, item) {

          jsonDA.push({
            Estacion: item.Name,
            Troncal: item.Corredor,
            Codigo: item.Id,
            Lat: item.Latitud,
            Lon: item.Longitud
          });
          troncales.push(item.Corredor);
          estaciones.push(item.Name);
          latLon.push({Estacion: item.Name, Lat: item.Latitud.replace(',', '.').replace('*', ''), Lon: item.Longitud.replace(',', '.').replace('*', ''),Troncal: item.Corredor,Id:item.Id});



      });
      $.each(troncales, function(i, item) {
          if ($.inArray(item, troncalesFiltradas) === -1) { troncalesFiltradas.push(item); }


      });

      let cont = 0;
      $.each(troncalesFiltradas, function(i, item) {
          const x = cont++;
          troncalesFiltradasColor.push({
            Troncal: item,
            Idcolor: 't' + String(x),
          });

      });

  });

    //  console.log(estacionesTroncales)
    console.log(jsonDA);
  }
  getjaisonDA() {
    return jsonDA;
  }

    getTroncales() {

      return this.TroncalBoton = troncalesFiltradasColor;

    }

    getLatLon() {
      return this.latLonMapa = latLon;
    }

    getEstaciones(dato) {

      estacionesTroncalesFiltradas = [];
      estacionesTroncales = $.grep(jsonDA, function(value) {
        return value.Troncal === dato;
      });

      $.each(estacionesTroncales, function(i, item) {

        estacionesTroncalesFiltradas.push({
          Estaciones: item.Estacion
        });

      });

      return estacionesTroncalesFiltradas;


    }

    buscarImagen(): Observable<any> {
      return this.http.get('./assets/json/imagenesjson.json');
    
    }

}
