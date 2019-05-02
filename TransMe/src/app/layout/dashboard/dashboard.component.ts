import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: '‘Me uno para vivir mejor’, la campaña sobre cultura ciudadana continúa en TransMilenio',
                text:
                    'Esta campaña está enmarcada en comportamientos de cultura ciudadana  ',
                link:'https://www.transmilenio.gov.co/publicaciones/151198/me-uno-para-vivir-mejor-la-campana-sobre-cultura-ciudadana-continua-en-transmilenio/'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: '¡Las rutas alimentadoras del Portal el Dorado tienen nuevos recorridos!',
                text: 'Ten presente que, a partir del 22 de abril de 2019, las rutas alimentadoras 16-1 Tierra Grata, 16-2 Engativá Centro, 16-4 El Muelle, 16-5 Villa Amalia y 16-6 La Faena, modificaron su recorrido pensando en cada uno de los usuarios.',
                link:'https://www.transmilenio.gov.co/publicaciones/151195/las-rutas-alimentadoras-del-portal-el-dorado-tienen-nuevos-recorridos/'

            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'TransMilenio recibe reconocimientos de MINTIC por calidad en información al público',
                text:
                    'TransMilenio cumplió con los requisitos de calidad y obtuvo el Sello de Excelencia en la categoría Gobierno Abierto – Datos Abiertos otorgado por MINTIC.',
                link:'https://www.transmilenio.gov.co/publicaciones/151167/transmilenio-recibe-reconocimientos-de-mintic-por-calidad-en-informacion-al-publico/'

            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `TransMilenio presta su servicio de lunes a viernes de 04:00 a 23:30, los sábados de 04:30 a 23:30 y los domingos y días feriados o festivos de 05:00 a 22:30. De lunes a viernes el servicio de buses alimentadores empieza a funcionar desde las 03:00 hasta las 00:30. Los sábados desde las 03:30 hasta las 00:30. Los domingos y festivos este mismo servicio funciona de 04:00 hasta las 23:30`
            },
            {
                id: 2,
                type: 'warning',
                message: ` Actualmente existen miles de puntos de recarga y venta de tarjetas en toda la ciudad y en los municipios de Cajicá, Cáqueza, Chía, Chocontá, Cogua, Cota, Facatativá, Funza, Fusagasugá, Gachancipá, Girardot, La Calera, Madrid, Mosquera, Pacho, Sibaté, Soacha, Sopó, Tabio, Tocancipá, Ubaté, Villa Pinzón, Villeta y Zipaquirá mediante la red Paga Todo.`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
