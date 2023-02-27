import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {IonicModule} from "@ionic/angular";
import {HeaderComponent} from "./header/header.component";



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    HeaderComponent
  ],
  exports: [
    UsersComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
