import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {TroncalesService} from './shared/services/troncales.service';
import { RutasService } from './shared/services/rutas.service';
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from './shared/services/user.service';
//import { HttpClient } from "@angular/common/http"; 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            progressBar:true
        }),
        //HttpClient,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDvardTfenpndyJApa9hYJoBHx8YA9dFKY'
          })
    ],
    declarations: [AppComponent],
    providers: [UserService, AuthGuard, TroncalesService,RutasService],
    bootstrap: [AppComponent]
})
export class AppModule {}
