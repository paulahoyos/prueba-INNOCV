
import { User } from 'user.model';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private userService: UsersService) { }
  user: User;

  ngOnInit() {
    this.user= this.userService.newUser();

  }

  newUser(): void {
    this.userService.addUsers(this.user);   
    this.user= this.userService.newUser();
  }


}

