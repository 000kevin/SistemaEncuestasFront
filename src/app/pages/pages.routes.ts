import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { InvestigadoresComponent } from './investigadores/investigadores.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EncuestadoresComponent } from './encuestadores/encuestadores.component';
import { AdminEncuestasComponent } from './admin-encuestas/admin-encuestas.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'perfil', component: DashboardComponent},
            {path: 'investigadores', component: InvestigadoresComponent},
            {path: 'estadisticas', component: EstadisticasComponent},
            {path: 'encuestadores', component: EncuestadoresComponent},
            {path: 'admin-encuesta', component: AdminEncuestasComponent},
            {path: '', redirectTo: '/perfil', pathMatch: 'full' },
        ]
    }
];

// tslint:disable-next-line:eofline
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);