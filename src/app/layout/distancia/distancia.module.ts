import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DistanciaRoutingModule } from './distancia-routing.module';
import { DistanciaComponent } from './distancia.component';

@NgModule({
  declarations: [DistanciaComponent],
  imports: [
    CommonModule,
    DistanciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class DistanciaModule { }
