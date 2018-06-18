import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestasComponent } from './encuestas.component';
import { DetalleEncuestaComponent } from './detalle-encuesta/detalle-encuesta.component';
import { PagesComponent } from '../pages.component';
import { RegistroEncuestaComponent } from './registro-encuesta/registro-encuesta.component';
import { DesarrolloEncuestaComponent } from './desarrollo-encuesta/desarrollo-encuesta.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'encuestas',
                component: EncuestasComponent,
                children: [
                    { path: ':id/detalle', component: DetalleEncuestaComponent },
                    { path: ':id/registro', component: RegistroEncuestaComponent },
                    { path: ':id/desarrollo', component: DesarrolloEncuestaComponent },
                    { path: '', component: ListaEncuestasComponent}
                ]
            },
        ]
    }
];

// tslint:disable-next-line:eofline
export const ENCUESTAS_ROUTES = RouterModule.forChild(pagesRoutes);