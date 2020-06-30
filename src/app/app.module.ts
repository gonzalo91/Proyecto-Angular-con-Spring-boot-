import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
