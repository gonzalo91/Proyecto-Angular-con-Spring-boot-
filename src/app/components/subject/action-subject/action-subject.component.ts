import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-action-subject',
  templateUrl: './action-subject.component.html',
  styleUrls: ['./action-subject.component.css']
})
export class ActionSubjectComponent implements OnInit ,OnDestroy {
  sub: any;
  id: number;
  isNew : Boolean;
  

  constructor(authService : AuthService, private route: ActivatedRoute) {
    authService.redirectHomeIfNotAuthorized(["TEACHER"])
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
