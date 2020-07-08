import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students : any[] = [];

  constructor(authService : AuthService, private studentService : StudentService) {
    authService.redirectHomeIfNotAuthorized(["ADMIN"]);
  }  

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){

    this.studentService.getAll()
        .subscribe((resp : any) =>{
          this.students = resp;
        })

  }

}
