import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';


export const STUDENT_ROUTES : Routes = [

    { path : 'nuevo', component: HomeComponent},
    { path : ':id/editar', component: HomeComponent},

]