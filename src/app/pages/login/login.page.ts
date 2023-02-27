import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {NavController} from "@ionic/angular";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'Sincere@april.biz',
    username: 'Bret'
  }

  constructor(private authService: AuthService, private navCtrl: NavController, private uiService: UiService) {
  }

  ngOnInit() {
  }


  async login(fLogin: NgForm) {

    if (fLogin.invalid) {
      return
    }
    const res = await this.authService.login(this.loginUser.username, this.loginUser.email)
    if (res) {
      await this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true})
    } else {
      await this.uiService.alertInfo('Username / email is incorrect')
    }

  }

}
