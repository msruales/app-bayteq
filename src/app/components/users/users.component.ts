import {Component, Input} from '@angular/core';
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  @Input() users: User[] = []

  constructor() {
  }

}
