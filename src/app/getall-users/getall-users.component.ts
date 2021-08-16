import { Component, OnInit } from '@angular/core';
import { User } from 'user.model'; 
import { UsersService } from '../users.service';

@Component({
  selector: 'app-getall-users',
  templateUrl: './getall-users.component.html',
  styleUrls: ['./getall-users.component.css']
})
export class GetallUsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users= this.userService.getUsers();
  }

  
  
}
