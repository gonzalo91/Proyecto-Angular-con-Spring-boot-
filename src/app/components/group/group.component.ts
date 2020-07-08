import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(authService : AuthService) {
    authService.redirectHomeIfNotAuthorized(["TEACHER"])
  }

  ngOnInit(): void {
  }

}
