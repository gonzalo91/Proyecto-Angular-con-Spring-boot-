

import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GroupComponent } from './group.component';
import { ActionGroupComponent } from './action-group/action-group.component';


export const GROUP_ROUTES : Routes = [

    {
        path :"grupos",    
        component: GroupComponent,       
    },
    {
      path :"grupos/editar/:id",    
      component: ActionGroupComponent,    
    },
    {
      path :"grupos/nuevo",    
      component: ActionGroupComponent,    
    },

]