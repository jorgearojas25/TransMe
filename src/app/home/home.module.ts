import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { HomesidebarComponent } from './home/homesidebar/homesidebar.component';


@NgModule({
  declarations: [HomeComponent, HomeheaderComponent, HomesidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ]
})
export class HomeModule { }
