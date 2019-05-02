import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
   path:'',
   component:HomeComponent,
   
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

