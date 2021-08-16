import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import {CreateuserComponent} from '../createuser/createuser.component';
import {GetallUsersComponent} from '../getall-users/getall-users.component';
import {RemoveComponent} from '../remove/remove.component';
import {GetComponent}  from '../get/get.component';
import {UpdateComponent}  from '../update/update.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [
   CreateuserComponent,
   GetallUsersComponent,
   RemoveComponent,
   GetComponent,
   UpdateComponent
  ],

  exports: [
    CreateuserComponent,
    GetallUsersComponent,
    RemoveComponent,
    GetComponent,
    UpdateComponent
  ],  

  providers: [
    UsersService
  ]
})
export class UserModule { }
