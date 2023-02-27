import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  userAuth: User = {} as User

  constructor(private authService: AuthService) {
  }

  async ngOnInit() {
    this.userAuth = await this.authService.getUser()
  }

}
