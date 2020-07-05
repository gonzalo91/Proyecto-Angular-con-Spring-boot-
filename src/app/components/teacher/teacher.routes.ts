

import { Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { ActionTeacherComponent } from './action-teacher/action-teacher.component';





export const TEACHER_ROUTES : Routes = [
    {
        path :"maestros",    
        component: TeacherComponent,       
    },
    {
      path :"maestros/editar/:id",    
      component: ActionTeacherComponent,    
    },
    {
      path :"maestros/nuevo",    
      component: ActionTeacherComponent,    
    },

]