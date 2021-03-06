import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TroncalesService } from '../../../shared/services/troncales.service';
import { RutasService } from 'src/app/shared/services/rutas.service';

declare var $: any;

@Component({
  selector: 'app-homesidebar',
  templateUrl: './homesidebar.component.html',
  styleUrls: ['./homesidebar.component.scss']
})
export class HomesidebarComponent implements OnInit {


    TroncalBoton: any[] = [];
    EstacionBoton: any[] = [];
    rutas: any[] =[];
    vagones:any[] =[];
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;


    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService, public router: Router, private _TroncalesService: TroncalesService,private _RutasService:RutasService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';

        this.TroncalBoton = this._TroncalesService.getTroncales();

        this.getVagones();
        this.getRutas();

    }

    clearInfo(){

        $('#rutapop').empty();
        $('#estacionCambio').val('');
    }

    getinfo(info){
        $('#estacionCambio').attr('value', info);
        $('#estacionCambio').click();
        $('#rutapop').append(info);
        this.verVagones(info);

      }


    verVagones(dato_nombreEstacion) {


        var vagonesFiltrados = $.grep(this.vagones,function(value) {
          return value.nombreEstacion === dato_nombreEstacion;
        });
        console.log(vagonesFiltrados);

        $('#rutapop').empty();
        let countVagon = 0;
        $("#rutapop").append('<h2><span class="badge badge-pill badge-danger style="font-size: 40px;">'+'Te encuentras en la estacion '+dato_nombreEstacion+'</span></h2>');
         $.each(vagonesFiltrados, function(i, value) {
           countVagon += 1;

        $('#rutapop').append('<br>');
        const vagonActual = 'Vagon '+ countVagon ;
          
        $("#rutapop").append('<span class="badge badge-secondary">'+vagonActual+'</span>');

        this.verRutas(value.idVagon);

        }.bind(this));

      }


      verRutas(dato_nombreVagon) {

        console.log(dato_nombreVagon);
        const rutasFiltradas = $.grep(this.rutas, function(value) {
          return value.idVagon === dato_nombreVagon;
        });
        console.log(rutasFiltradas);
        // $("#rutaspop").empty();
        let html = '';
        $.each(rutasFiltradas, function(index, value) {
        html += `<div style="margin-left:10px; display:inline-block"> ${value.nombreRuta}</div>`;
        });
        $('#rutapop').append(html);


      }


    public getEstaciones(data) {
        this.EstacionBoton = this._TroncalesService.getEstaciones(data);
        console.log( this.EstacionBoton);

    }
    public getVagones() {
        this._RutasService.getJSONvagones().subscribe(data => {
            for (let i = 0; i <= data.length - 1; i++) {
                this.vagones.push((data[i])) ; }
    });
        console.log("vagones: "+this.vagones);
    }

    public getRutas() {
        this._RutasService.getJSONrutas().subscribe(data => {
            for (let i = 0; i <= data.length - 1; i++) {
                this.rutas.push((data[i]));
            }

        });
        console.log("rutas: "+this.rutas);
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }



}

