import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { GroupComponent } from './components/group/group.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { SidebarComponent } from './components/Shared/sidebar/sidebar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { ContentHeaderComponent } from './components/Shared/content-header/content-header.component';
import { DeleteResourceComponent } from './components/Shared/delete-resource/delete-resource.component';
import { ActionTeacherComponent } from './components/teacher/action-teacher/action-teacher.component';
import { ActionGroupComponent } from './components/group/action-group/action-group.component';
import { ActionSubjectComponent } from './components/subject/action-subject/action-subject.component';
import { ActionStudentComponent } from './components/student/action-student/action-student.component';
import { StatusTextComponent } from './components/Shared/status-text/status-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    SubjectComponent,
    GroupComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentHeaderComponent,
    DeleteResourceComponent,
    ActionTeacherComponent,
    ActionGroupComponent,
    ActionSubjectComponent,
    ActionStudentComponent,
    StatusTextComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
