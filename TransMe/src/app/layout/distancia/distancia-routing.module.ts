import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistanciaComponent } from './distancia.component';

const routes: Routes = [
  {
    path:'',component: DistanciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistanciaRoutingModule { }
