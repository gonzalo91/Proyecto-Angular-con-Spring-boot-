import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(authService : AuthService) {
    authService.redirectHomeIfNotAuthorized(["TEACHER"])
  }  

  ngOnInit(): void {
  }

}
