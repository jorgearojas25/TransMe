import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioconfComponent } from './usuarioconf.component';

const routes: Routes = [
  {path:'',component:UsuarioconfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioconfRoutingModule { }
