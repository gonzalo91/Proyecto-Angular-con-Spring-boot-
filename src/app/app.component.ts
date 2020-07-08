import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ss';
  isAuthenticated : Boolean;

  constructor(private authService : AuthService){
      this.checkAuthentication();
  }

  checkAuthentication(){
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logOut(){
    this.authService.logOut();
    this.checkAuthentication();
  }

}
