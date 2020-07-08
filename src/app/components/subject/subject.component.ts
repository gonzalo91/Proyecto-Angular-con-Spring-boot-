import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects : any[] = [];

  constructor(authService : AuthService, private subjectService : SubjectService) {
    authService.redirectHomeIfNotAuthorized(["TEACHER"])
  }  

  ngOnInit(): void {
    this.getAll();
  }

  

  getAll(){
    return this.subjectService.getAll()
            .subscribe((resp : any[]) => {
              this.subjects = resp;
            });
  }

}
