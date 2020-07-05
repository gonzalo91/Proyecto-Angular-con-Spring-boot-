

import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SubjectComponent } from './subject.component';
import { ActionSubjectComponent } from './action-subject/action-subject.component';


export const SUBJECT_ROUTES : Routes = [

    {
        path :"materias",    
        component: SubjectComponent,       
    },
    {
      path :"materias/editar/:id",    
      component: ActionSubjectComponent,    
    },
    {
      path :"materias/nuevo",    
      component: ActionSubjectComponent,    
    },

]