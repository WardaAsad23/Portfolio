import { Routes } from '@angular/router';
import { Main } from './main/main';
import { NotFound } from './not-found/not-found';
import { mainRoutes } from './main/main.routes';

export const routes: Routes = [
    {
        path: '',
        component: Main,
        children: mainRoutes
    },
    { path: '**', component: NotFound }
];
