import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {


  @Output()
  logOut = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }


  logout(){
    this.logOut.emit("");
  }
}
