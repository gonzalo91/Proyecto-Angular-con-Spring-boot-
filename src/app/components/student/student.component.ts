import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(authService : AuthService) {
    authService.redirectHomeIfNotAuthorized(["ADMIN"]);
  }  

  ngOnInit(): void {
  }

}
