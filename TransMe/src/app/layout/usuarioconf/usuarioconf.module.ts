import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioconfRoutingModule } from './usuarioconf-routing.module';
import { UsuarioconfComponent } from './usuarioconf.component';

@NgModule({
  declarations: [UsuarioconfComponent],
  imports: [
    CommonModule,
    UsuarioconfRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class UsuarioconfModule { }
