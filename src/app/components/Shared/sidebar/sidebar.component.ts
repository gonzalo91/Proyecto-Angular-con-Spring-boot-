import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

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
  public name : String;

  constructor(private authService : AuthService, private storageService : StorageService) {
    this.isAdmin   = authService.hasProfiles(["ADMIN"]);
    this.isStudent = authService.hasProfiles(["STUDENT"]);
    this.isTeacher = authService.hasProfiles(["TEACHER"]); 
    this.name = this.storageService.getUserName()
  }

  ngOnInit(): void {
  }

}
