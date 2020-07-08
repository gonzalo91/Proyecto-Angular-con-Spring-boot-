import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public isAdmin : Boolean;
  public isTeacher : Boolean;
  public isStudent : Boolean;

  constructor(private authService : AuthService) {
    this.isAdmin   = authService.hasProfiles(["ADMIN"]);
    this.isStudent = authService.hasProfiles(["STUDENT"]);
    this.isTeacher = authService.hasProfiles(["TEACHER"]); 
  }

  ngOnInit(): void {
  }

}
