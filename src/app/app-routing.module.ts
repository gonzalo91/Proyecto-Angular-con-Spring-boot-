import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';

import { STUDENT_ROUTES } from './components/student/student.routes';
import { SUBJECT_ROUTES } from './components/subject/subject.routes';
import { GROUP_ROUTES } from './components/group/group.routes';
import { StudentComponent } from './components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { GroupComponent } from './components/group/group.component';
import { LoginComponent } from './components/login/login.component';
import { ActionTeacherComponent } from './components/teacher/action-teacher/action-teacher.component';
import { TEACHER_ROUTES } from './components/teacher/teacher.routes';


const routes: Routes = [
  {path :"",       component: HomeComponent},
  {path :"login", component: LoginComponent},
  ...TEACHER_ROUTES,
  ...STUDENT_ROUTES,
  ...SUBJECT_ROUTES,
  ...GROUP_ROUTES,  
  {path :"inscripcion", component: HomeComponent, },
  { path: '**', pathMatch:"full",  redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
