import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers : any[] = [];

  filterForm: FormGroup;

  constructor(authService : AuthService, private teacherService : TeacherService, public fb: FormBuilder) {
    authService.redirectHomeIfNotAuthorized(["ADMIN"]);

    this.filterForm = this.fb.group({
      name: ['', []],
      username: ['', []],
      n_employee: ['', []],
      type: ['', []],
      status: ['', []],      
    });
  }  

  ngOnInit(): void {  
    this.getAll();
  }

  getAll(){
    this.teacherService.getAll()
        .subscribe( (res : any[]) => this.teachers = res);
  }

  filter(){    
    
    this.teacherService.filter(this.filterForm.value)
        .subscribe( (res : any[]) => this.teachers = res);    

  }

  delete(id : Number){
    this.teacherService.delete(id)
        .subscribe((res : any[]) => {
            if(this.filterForm.dirty)
              this.filter();
            else 
              this.getAll();
        });
  }

}
