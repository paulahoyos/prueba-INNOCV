import { Component, OnInit } from '@angular/core';
import { User } from 'user.model'; 
import { UsersService } from '../users.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  user: User;
  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.user= this.userService.newUser();
  }

  deleteUser(): void {
    this.userService.deleteUsers(this.user.id);
    
  }
}
