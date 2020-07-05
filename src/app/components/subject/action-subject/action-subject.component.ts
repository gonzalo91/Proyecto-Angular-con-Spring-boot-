import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-subject',
  templateUrl: './action-subject.component.html',
  styleUrls: ['./action-subject.component.css']
})
export class ActionSubjectComponent implements OnInit ,OnDestroy {
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
