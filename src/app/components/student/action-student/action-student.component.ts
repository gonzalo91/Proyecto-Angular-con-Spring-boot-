import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-action-student',
  templateUrl: './action-student.component.html',
  styleUrls: ['./action-student.component.css']
})
export class ActionStudentComponent implements OnInit ,OnDestroy {
  sub: any;
  id: number;
  isNew : Boolean;
  
  
  constructor(authService : AuthService, private route: ActivatedRoute) {
    authService.redirectHomeIfNotAuthorized(["ADMIN"]);
  }  
  

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];             
      this.isNew =  isNaN(this.id);      
    });
  }

  ngOnDestroy(): void {    
    this.sub.unsubscribe();
  }

}
