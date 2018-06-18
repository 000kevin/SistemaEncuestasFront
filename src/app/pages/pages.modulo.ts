import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/share.module';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { InvestigadoresComponent } from './investigadores/investigadores.component';
import { EncuestadoresComponent } from './encuestadores/encuestadores.component';
import { AdminEncuestasComponent } from './admin-encuestas/admin-encuestas.component';
import { EncuestaModule } from './encuestas/encuestas.module';

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        EstadisticasComponent,
        EncuestasComponent,
        InvestigadoresComponent,
        EncuestadoresComponent,
        AdminEncuestasComponent,
    ],
    imports: [
        PAGES_ROUTES,
        SharedModule,
        EncuestaModule
    ],
    exports: [
        DashboardComponent,
        PagesComponent,
        EstadisticasComponent,
        EncuestasComponent,
        InvestigadoresComponent,
        EncuestadoresComponent,
        AdminEncuestasComponent,
    ],
    providers: [],
    bootstrap: []
})
// tslint:disable-next-line:eofline
export class PagesModule { }