import {Component, Input, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = ''

  constructor(private alertController: AlertController, private authService: AuthService) {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Accept',
          role: 'confirm',
          handler: () => {
            this.authService.logout()
          },
        },
      ],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
