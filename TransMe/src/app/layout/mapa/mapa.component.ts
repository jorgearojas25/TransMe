import { Component, OnInit } from '@angular/core';

import { google } from '@agm/core/services/google-maps-types';

import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { TranslateService } from '@ngx-translate/core';
import { TroncalesService } from '../../shared/services/troncales.service';
import { Router } from '@angular/router';
import { RutasService } from 'src/app/shared/services/rutas.service';




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
  rutas: any[] =[];
  vagones:any[] =[];
   // tslint:disable-next-line:max-line-length
   jsonDA2: any[] = [];
   arrayRutas2: any[] = [];
   latLon: any[] = [];
   rutaImages:any[]=[];


  ngOnInit() {
    this.Troncal = this._TroncalesService.getTroncales();
    this.latLon = this._TroncalesService.getLatLon();
    console.log(this.latLon);
    
    this.getVagones();
    this.getRutas();
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
verVagones(dato_nombreEstacion) {


  var vagonesFiltrados = $.grep(this.vagones,function(value) {
    return value.nombreEstacion === dato_nombreEstacion;
  });
  console.log(vagonesFiltrados);

  $('#rutapop').empty();
  let countVagon = 0;
  $("#rutapop").append('<h2><span class="badge badge-pill badge-danger style="font-size: 40px;">'+'Te encuentras en la estacion '+dato_nombreEstacion+'</span></h2>');
   $.each(vagonesFiltrados, function(i, value) {
     countVagon += 1;

  $('#rutapop').append('<br>');
  const vagonActual = 'Vagon '+ countVagon ;
    
  $("#rutapop").append('<span class="badge badge-secondary">'+vagonActual+'</span>');

  this.verRutas(value.idVagon);

  }.bind(this));

}
verRutas(dato_nombreVagon) {

  console.log(dato_nombreVagon);
  const rutasFiltradas = $.grep(this.rutas, function(value) {
    return value.idVagon === dato_nombreVagon;
  });
  console.log(rutasFiltradas);
  // $("#rutaspop").empty();
  let html = '';
  $.each(rutasFiltradas, function(index, value) {
  html += `<div style="margin-left:10px; display:inline-block"> ${value.nombreRuta}</div>`;
  });
  $('#rutapop').append(html);


}
public getVagones() {
  this._RutasService.getJSONvagones().subscribe(data => {
      for (let i = 0; i <= data.length - 1; i++) {
          this.vagones.push((data[i])) ; }
});
  console.log("vagones: "+this.vagones);
}

public getRutas() {
  this._RutasService.getJSONrutas().subscribe(data => {
      for (let i = 0; i <= data.length - 1; i++) {
          this.rutas.push((data[i]));
      }

  });
  console.log("rutas: "+this.rutas);
}

buscar() {

  this.latLon.forEach(element => {

   if (element.Estacion === $('#estacionCambio').val()) {
     
        
      this.resetMap(parseFloat(element.Lat), parseFloat(element.Lon), 20,element.Estacion);
   }
 });

}
buscar2() {

  this.latLon.forEach(element => {

   if (element.Estacion.toLowerCase() === $('#cambiobusqueda').val().toLowerCase() ) {
      this.resetMap(parseFloat(element.Lat), parseFloat(element.Lon), 20,element.Estacion);
   }
 });

}

comprobar(vagon: string, Estacion: string) {
  if (vagon.indexOf(Estacion)) {
    return true;
  }
  return false;
}
resetMap(lati: number , long: number, zoom2: number,palabra:String) {

  console.log(lati + ' lat ' + long + ' long ' + zoom2 + ' zoom');
  this.lat = lati;
  this.lng = long;
  this.zoom = zoom2;
  if(palabra!=undefined){
    
     
    this.verVagones(palabra);
    }else{
      $('#rutapop').empty();
    }
  }


/* buscarImagen(id_ruta){
    id_ruta=id_ruta.toString();
    console.log(this.rutaImages);
    console.log(id_ruta);
    const rutaimagen=$.grep(this.rutaImages,function(value){
      return value.idRuta === id_ruta;
    });
    const rutaimagenURL=rutaimagen.map(a=>a.URL);
    const ruta='../../../../'+rutaimagenURL;
    console.log(rutaimagen);
    console.log(rutaimagenURL);
    console.log(ruta);
    $("#"+id_ruta).attr('src',ruta);

}
 */
/* getBuscarImagen(){
  this._TroncalesService.buscarImagen().subscribe(data=>{
    for (let i = 0; i <= data.length - 1; i++) {
      this.rutaImages.push((data[i])) ; }
      });
      console.log(this.rutaImages);
      for(var i=1;i<=this.rutaImages.length;i++){
        this.buscarImagen(i);
      }
} */



}

