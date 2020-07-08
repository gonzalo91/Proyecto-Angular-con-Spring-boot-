import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import { Toast } from 'src/app/helpers/toast';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  available_groups : any[] = [];
  subscribe_groups : any[] = [];

  constructor(authService : AuthService, private studentService : StudentService) {
    authService.redirectHomeIfNotAuthorized(["STUDENT"]);
    
  }  

  ngOnInit(): void {
    this.getInscription();
  }

  getInscription(){
    this.studentService.getInscription()
        .subscribe((resp : any) => {
          this.available_groups = resp.available_groups
          this.subscribe_groups = resp.subscribe_groups          
        })

  }

  unsuscribe(id :Number ){
    this.studentService.unsuscribe(id)
        .subscribe((resp: any) => {
          this.getInscription()
          Toast.fire("Grupo Dado de Baja", "" , "success")
        })
  }

  subscribe(id : Number){
    this.studentService.subscribe(id)
        .subscribe((resp: any) => {          
          if(resp == 1){
            Toast.fire("Grupo Inscrito", "" , "success")
          }else{
            Toast.fire("Grupo Lleno", "" , "error")
          }
          
          this.getInscription()
          
        })
  }

}
