import { Injectable } from '@angular/core';

declare var $:any;
var troncales:any[]=[];
var troncalesFiltradas:any[]=[];


@Injectable({
  providedIn: 'root'
})
export class TroncalesService {

  constructor() { 

    $.getJSON("http://datosabiertos.bogota.gov.co/api/3/action/datastore_search?resource_id=d0775af7-1706-4404-8bea-387194287d73&limit=1000",function(data){

      $.each(data.result.records,function(i,item){
  
          troncales.push(item.Corredor);
        
      });
      $.each(troncales,function(i,item){
          if($.inArray(item, troncalesFiltradas) === -1) troncalesFiltradas.push(item);
      });
  
      
  });

  }

  private EstacionBoton:any[]=[];
 
    getTroncales(){

      return this.EstacionBoton=troncalesFiltradas;

    }

   
}
