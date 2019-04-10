import { Injectable } from '@angular/core';

declare var $:any;
var troncales:any[]=[];
var troncalesFiltradas:any[]=[];
var estaciones:any[]=[];
var estacionesFiltradas:any[]=[];
var jsonDA:any[]=[];
var estacionesTroncales:any[]=[];
var x:any[]=[];

@Injectable({
  providedIn: 'root'
})
export class TroncalesService {

  constructor() { 

    $.getJSON("http://datosabiertos.bogota.gov.co/api/3/action/datastore_search?resource_id=d0775af7-1706-4404-8bea-387194287d73&limit=1000",function(data){

      $.each(data.result.records,function(i,item){
          
          jsonDA.push({
            Estacion:item.Name,
            Troncal: item.Corredor,
            Codigo: item.Id,
            LatLon: { Lat: item.Latitud, Lon: item.Longitud },
          });
          troncales.push(item.Corredor);
          estaciones.push(item.Name);


      });
      $.each(troncales,function(i,item){
          if($.inArray(item, troncalesFiltradas) === -1) troncalesFiltradas.push(item);     
  

      });
      
  });
  
    //  console.log(estacionesTroncales)
    console.log(jsonDA);
  }


  private TroncalBoton:any[]=[];
  private EstacionBoton:any[]=[];
  valorTroncal:any;
 
    getTroncales(){

      return this.TroncalBoton=troncalesFiltradas;

    }
    
    getEstaciones(dato){
      
      // jsonDA.find({'Troncal':dato})
      x=jsonDA.map(obj=>obj.Estacion);
      
      return x;
      // return data;

    }
   
}
