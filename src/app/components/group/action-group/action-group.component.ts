import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-group',
  templateUrl: './action-group.component.html',
  styleUrls: ['./action-group.component.css']
})
export class ActionGroupComponent implements OnInit ,OnDestroy {
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
