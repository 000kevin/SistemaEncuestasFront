import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesarrolloEncuestaComponent } from './desarrollo-encuesta/desarrollo-encuesta.component';
import { DetalleEncuestaComponent } from './detalle-encuesta/detalle-encuesta.component';
import { RegistroEncuestaComponent } from './registro-encuesta/registro-encuesta.component';
import { ENCUESTAS_ROUTES } from './encuestas.routes';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';


@NgModule({
    declarations: [
        DesarrolloEncuestaComponent,
        DetalleEncuestaComponent,
        RegistroEncuestaComponent,
        ListaEncuestasComponent
    ],
    imports: [
        ENCUESTAS_ROUTES
    ],
    exports: [
        DesarrolloEncuestaComponent,
        DetalleEncuestaComponent,
        RegistroEncuestaComponent
    ],
    providers: [],
    bootstrap: []
})
// tslint:disable-next-line:eofline
export class EncuestaModule { }