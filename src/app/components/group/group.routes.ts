

import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';


export const GROUP_ROUTES : Routes = [

    { path : 'nuevo', component: HomeComponent},
    { path : ':id/editar', component: HomeComponent},

]