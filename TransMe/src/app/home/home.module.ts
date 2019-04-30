import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { HomesidebarComponent } from './home/homesidebar/homesidebar.component';
import { MapaComponent } from './home/mapa/mapa.component';
import { BusquedasComponent } from './home/busquedas/busquedas.component';

import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomerutasComponent } from './home/homerutas/homerutas.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './home/slider/slider.component';
import { HomefooterComponent } from './home/homefooter/homefooter.component';


@NgModule({
  declarations: [HomeComponent, HomeheaderComponent, HomesidebarComponent, MapaComponent, BusquedasComponent, HomerutasComponent, SliderComponent, HomefooterComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjoxbkhBjYnN9gkW3BsPjTkvJ3kQsp-oY'
    })
  ]
})
export class HomeModule { }
