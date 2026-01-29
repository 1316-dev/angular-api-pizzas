import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Recipes } from './pages/recipes/recipes';
import { NotFound } from './pages/not-found/not-found';
import { Detail } from './pages/detail/detail';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'recipes', component: Recipes},
    {path: 'detail/:id', component: Detail},
    {path: '**', component: NotFound},

];
