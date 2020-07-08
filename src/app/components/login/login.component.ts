import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Toast } from 'src/app/helpers/toast';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm : FormGroup;  

  @Output() 
  hasLogged = new EventEmitter();

  constructor(public authService : AuthService, public fb : FormBuilder) { 
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  async login (){
    let has_logged : Boolean = await this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password);

    if(has_logged){
      Toast.fire(
        'Accendiendo...',        
        '',
        'success'
      );      
      this.hasLogged.emit("");
    }else{
      Toast.fire(
        'Usuario o contraseña incorrectos',        
        '',
        'error'
      );      
    }
    
    
    
  }
}
