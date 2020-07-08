import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups : any[] = []

  constructor(authService : AuthService, private groupService : GroupService) {
    authService.redirectHomeIfNotAuthorized(["TEACHER"])
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    
    this.groupService.getAll()
    .subscribe( (resp: any) => {
      this.groups = resp;
    })

  }





}
