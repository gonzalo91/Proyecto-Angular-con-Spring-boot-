import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  @Input() title : string;

  constructor( 
      private _router : Router,
      private _location: Location
  ) {    
    
   }

  getRouter() : Router{
    return this._router;
  }

  goBack() : void{
    this._location.back();
  }

  ngOnInit(): void {
  }

}
