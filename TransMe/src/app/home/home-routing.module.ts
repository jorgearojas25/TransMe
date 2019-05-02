import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NosotrosComponent} from './home/nosotros/nosotros.component';
import{Componente2Component} from './home/componente2/componente2.component';
import{Componente3Component} from './home/componente3/componente3.component';




const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'nosotros', component: NosotrosComponent
}
,
{
  path: 'componente2', component: Componente2Component
}
,
{
  path: 'componente3', component: Componente3Component
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

