import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
