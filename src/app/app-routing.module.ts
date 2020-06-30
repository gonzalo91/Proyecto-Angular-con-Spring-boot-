import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';

import { TEACHER_ROUTES } from './components/teacher/teacher.routes';
import { STUDENT_ROUTES } from './components/student/student.routes';
import { SUBJECT_ROUTES } from './components/subject/subject.routes';
import { GROUP_ROUTES } from './components/group/group.routes';
import { StudentComponent } from './components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { GroupComponent } from './components/group/group.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path :"",       component: HomeComponent},
  {path :"login", component: LoginComponent},
  {
      path :"maestros",    
      component: TeacherComponent,
      children: TEACHER_ROUTES
  },
  {
    path :"alumnos",    
    component: StudentComponent,
    children: STUDENT_ROUTES
  },
  {
    path :"materias",    
    component: SubjectComponent,
    children: SUBJECT_ROUTES
  },
  {
    path :"grupos",    
    component: GroupComponent,
    children: GROUP_ROUTES
  },      
  {path :"inscripcion", component: HomeComponent, },
  { path: '**', pathMatch:"full",  redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
