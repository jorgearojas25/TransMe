import { Injectable } from '@angular/core';

declare var $:any;
var troncales:any[]=[];
var troncalesFiltradas:any[]=[];
var estaciones:any[]=[];
var jsonDA:any[]=[];
var estacionesTroncales:any[]=[];
var estacionesTroncalesFiltradas:any[]=[];
@Injectable({
  providedIn: 'root'
})
export class TroncalesService {

  
  private TroncalBoton:any[]=[];
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
 
    getTroncales(){

      return this.TroncalBoton=troncalesFiltradas;

    }
    
    getEstaciones(dato){
      
      estacionesTroncalesFiltradas=[];
      estacionesTroncales=$.grep(jsonDA,function(value){
        return value.Troncal==dato;
      });

      $.each(estacionesTroncales,function(i,item){

        estacionesTroncalesFiltradas.push({
          Estaciones:item.Estacion
        })

      })    
    
      return estacionesTroncalesFiltradas;


    }
   
}
