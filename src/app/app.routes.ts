import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', component: PagesComponent },
    { path: 'login', component: LoginComponent },
];

// tslint:disable-next-line:eofline
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });