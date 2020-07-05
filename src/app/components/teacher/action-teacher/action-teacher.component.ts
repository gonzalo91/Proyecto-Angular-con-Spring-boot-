import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNumber } from 'util';

@Component({
  selector: 'app-action-teacher',
  templateUrl: './action-teacher.component.html',
  styleUrls: ['./action-teacher.component.css']
})
export class ActionTeacherComponent implements OnInit, OnDestroy {
  sub: any;
  id: number;
  isNew : Boolean;

  constructor(private route: ActivatedRoute) { 
    
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
