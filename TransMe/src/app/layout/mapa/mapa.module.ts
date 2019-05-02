import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapaRoutingModule } from './mapa-routing.module';
import { MapaComponent } from './mapa.component';
import { AgmMap, AgmMarker } from '@agm/core';


@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    MapaRoutingModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjoxbkhBjYnN9gkW3BsPjTkvJ3kQsp-oY'
    })
  ]
})
export class MapaModule { }
