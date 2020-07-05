import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StudentComponent } from './student.component';
import { ActionStudentComponent } from './action-student/action-student.component';


export const STUDENT_ROUTES : Routes = [

    {
        path :"alumnos",    
        component: StudentComponent,       
    },
    {
      path :"alumnos/editar/:id",    
      component: ActionStudentComponent,    
    },
    {
      path :"alumnos/nuevo",    
      component: ActionStudentComponent,    
    },

]