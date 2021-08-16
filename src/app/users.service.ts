import { Injectable } from '@angular/core';
import { User } from 'user.model';

@Injectable()
export class UsersService {

  private users: User[];
  private usersFind : User[];

  constructor() { 
    
  this.users = [],

  this.usersFind = [];

  }
   getUsers(){

    return this.users;

   }

   getUsersFinds(){

    return this.usersFind;

   }

   addUsers(newUser: User) {
    this.users.push(newUser);
  }
  addUsersfind(newUser: User) {
    this.usersFind.push(newUser);
  }


  newUser(): User {
    return {
      id: this.users.length,
      name: '',
    birthdate: new Date()
    
    };   

}
deleteUsers(userid: number) {
  for( var i = 0; i < this.users.length; i++){ 
    
    if ( this.users[i].id === userid) { 

        this.users.splice(i, 1); 
    }

}
  //this.users.pop();
  
}
findUser(lookuser: number) {
  

  for( var i = 0; i < this.users.length; i++){ 
    
    if ( this.users[i].id === lookuser) { 
      this.usersFind.push(this.users[i]);
    
    }
//return this.usersFind;

}
  
  
}
updateUser(oldid: number, user2: string, birthday2: Date) {
  
  for( var i = 0; i < this.users.length; i++){ 
    
    if ( this.users[i].id === oldid) {
      
        this.users[i].name = user2;

        this.users[i].birthdate = birthday2;
    }
//return this.usersFind;

}
  //this.users.pop();
  
}

}