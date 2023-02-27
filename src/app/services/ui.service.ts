import { Injectable } from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async alertInfo(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom' = 'bottom') {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
