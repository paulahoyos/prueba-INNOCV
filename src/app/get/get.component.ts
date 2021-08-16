import { Component, OnInit } from '@angular/core';
import { User } from 'user.model'; 
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  user:User;
  users: User[];
  usersFind : User[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.user= this.userService.newUser();
//this.users= this.userService.getUsers();
     this.usersFind= this.userService.getUsersFinds();
     //this.usersFind= this.userService.getUsersFinds();
   }



  getuser(): void {
    this.userService.findUser(this.user.id);
    
  }



}
