import { Component, OnInit } from '@angular/core';
import { User } from 'user.model'; 
import { UsersService } from '../users.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: User;
  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.user= this.userService.newUser();
  }
  UPDATEuser(): void {
    this.userService.updateUser(this.user.id, this.user.name, this.user.birthdate);
    
  }
}
