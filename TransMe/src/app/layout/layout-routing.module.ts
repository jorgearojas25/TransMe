import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'Administrador', loadChildren:'./admin/admin.module#AdminModule', canActivate: [AuthGuard],data:{permittedRoles:['Admin']}},
            { path: 'Mapa', loadChildren:'./mapa/mapa.module#MapaModule'},
            { path: 'Distancia', loadChildren:'./distancia/distancia.module#DistanciaModule'},
            { path: 'Eventos', loadChildren: './eventos/eventos.module#EventosModule'},
            { path: 'Perfil', loadChildren:'./usuarioconf/usuarioconf.module#UsuarioconfModule'},
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
