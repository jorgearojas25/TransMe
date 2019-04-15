import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TroncalesService } from '../../../shared/services/troncales.service';

declare var $: any;

@Component({
  selector: 'app-homesidebar',
  templateUrl: './homesidebar.component.html',
  styleUrls: ['./homesidebar.component.scss']
})
export class HomesidebarComponent implements OnInit {


    TroncalBoton: any[] = [];
    EstacionBoton: any[] = [];
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;


    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService, public router: Router, private _TroncalesService: TroncalesService) {
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


    }

    public getEstaciones(data) {
        this.EstacionBoton = this._TroncalesService.getEstaciones(data);
        console.log( this.EstacionBoton);

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

