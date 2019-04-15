import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistanciaRoutingModule } from './distancia-routing.module';
import { DistanciaComponent } from './distancia.component';

@NgModule({
  declarations: [DistanciaComponent],
  imports: [
    CommonModule,
    DistanciaRoutingModule
  ]
})
export class DistanciaModule { }
