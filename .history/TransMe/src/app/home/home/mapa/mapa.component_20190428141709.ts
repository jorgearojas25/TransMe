import { Component, OnInit, ViewChild } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { TranslateService } from '@ngx-translate/core';
import { TroncalesService } from '../../../shared/services/troncales.service';
import { Router } from '@angular/router';
import { RutasService } from 'src/app/shared/services/rutas.service';
import { Observer } from 'ts-observer-pattern';



declare var lat: any;
declare var $: any;
const jsonDA: any[] = [];
const arrayRutas: any[] = [];



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  lat = 4.6597100;
  lng = -74.0917500;
  zoom = 11;
   Troncal: any[] = [];
  Estacion: any[]  = [];
  Troncal2: String[];
   // tslint:disable-next-line:max-line-length
   jsonDA2: any[] = [];
   arrayRutas2: any[] = [];
   latLon: any[] = [];


  ngOnInit() {
    this.Troncal = this._TroncalesService.getTroncales();
    this.latLon = this._TroncalesService.getLatLon();
    console.log(this.latLon);

  }

  // tslint:disable-next-line:max-line-length
  constructor(private translate: TranslateService, public router: Router, private _TroncalesService: TroncalesService , private _RutasService: RutasService) {
   // tslint:disable-next-line:max-line-length
   $.getJSON('http://datosabiertos.bogota.gov.co/api/3/action/datastore_search?resource_id=d0775af7-1706-4404-8bea-387194287d73&limit=1000', function(data) {
    $.each(data.result.records, function(i, item) {

      jsonDA.push({
        Estacion: item.Name,
        Troncal: item.Corredor,
        Codigo: item.Id,
        LatLon: { Lat: item.Latitud, Lon: item.Longitud },
      });
   });
  });
  this.jsonDA2 = jsonDA;
  console.log(this.jsonDA2);
  this._RutasService.getJSONrutas().subscribe(data => {
    for (let i = 0; i <= data.length - 1; i++) {
        this.arrayRutas2.push((data[i]));
    }

});
console.log(this.arrayRutas2);


}
comprobar(vagon: string, Estacion: string) {
  if (vagon.indexOf(Estacion)) {
    return true;
  }
  return false;
}
resetMap(lati: number , long: number, zoom2: number) {

  console.log(lati + ' lat ' + long + ' long ' + zoom2 + ' zoom');
  this.lat = lati;
  this.lng = long;
  this.zoom = zoom2;
}
}
