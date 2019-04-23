import { Component, OnInit, ViewChild } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { TranslateService } from '@ngx-translate/core';
import { TroncalesService } from '../../../shared/services/troncales.service';
import { Router } from '@angular/router';



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
   Troncal: any[] = [];
  Estacion: any[]  = [];
  Troncal2: String[];
   // tslint:disable-next-line:max-line-length
   style2 = '[{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#dddddd"},{"saturation":-100},{"lightness":-3},{"visibility":"on"}]}]';
   jsonDA2: any[] = [];
   arrayRutas2: any[] = [];
   latLon: any[] = [];

  ngOnInit() {
    this.Troncal = this._TroncalesService.getTroncales();
    this.latLon = this._TroncalesService.getLatLon();
    console.log(this.latLon);
  }

  constructor(private translate: TranslateService, public router: Router, private _TroncalesService: TroncalesService) {
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


  $.getJSON('./../../../assets/json/rutas.json', function(rutas) {
  $.each(rutas.result.records, function(i, r) {

    arrayRutas.push({
      Ruta: r.nombreRuta,
      Esctacion: r.idVagon
    });
    console.log(r);
 });
});
this.arrayRutas2 = arrayRutas;
console.log('rutas');
console.log(this.arrayRutas2);
}
}
