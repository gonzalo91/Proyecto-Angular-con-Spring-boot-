import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNumber } from 'util';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Toast } from 'src/app/helpers/toast';
import {Location} from '@angular/common';


@Component({
  selector: 'app-action-teacher',
  templateUrl: './action-teacher.component.html',
  styleUrls: ['./action-teacher.component.css']
})
export class ActionTeacherComponent implements OnInit, OnDestroy {
  sub: any;
  id: number;
  isNew : Boolean;

  form: FormGroup;

  constructor(authService : AuthService, private route: ActivatedRoute, 
              private teacherService : TeacherService, public fb: FormBuilder,
              private _location: Location) {
      authService.redirectHomeIfNotAuthorized(["ADMIN"]);
      
      this.initializeForm();    
      
  }  

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];             
      this.isNew =  isNaN(this.id);   

      if(this.isNew)
        this.initializeForm();
      else 
        this.getById(this.id);

    });
  }

  initializeForm(name = "", username="", n_employee = "", type="", status =""){
    this.form = this.fb.group({
      name: [name, [Validators.required]],
      username: [username, [Validators.required]],
      n_employee: [n_employee, [Validators.required]],
      type: [type, [Validators.required]],
      password : ["", this.isNew ? [Validators.required] : []],
      status: [status, [Validators.required]],      
    });
  }

  ngOnDestroy(): void {    
    this.sub.unsubscribe();
  }
  
  getById(id : Number){
    
    this.teacherService.getById(id).subscribe( (res : any) => {
        
      this.initializeForm(res.user.name, res.user.username, res.n_employee, res.type.id, res.user.status);
        
    })

  }

  save(){
    let values = this.form.value;
    
    if(this.isNew){
      let body = {
          "n_employee" : values.n_employee,
          "type"       : values.type,
          "username"   : values.username,
          "name"       : values.name,
          "password"   : values.password,
          "status"     : values.status
      }

      this.teacherService.create(body)
          .subscribe((resp : any) => {
              Toast.fire("Maestro Creado", "", "success");
              this._location.back();
          })
    }else{
      let body = {
        "n_employee" : values.n_employee,
        "type"       : {
            "id": values.type
        },
        "user"       : {
            "id"         : this.id,
            "username"   : values.username,
            "name"       : values.name,
            "password"   : "cabrera69",
            "status"     : values.status
        } 
      };

      this.teacherService.update(body).subscribe( (res : any[]) => {
          Toast.fire("Maestro Actualizado", "", "success");
          this._location.back();
      });
    }
    console.log(this.form.value);
    
  }

}
