import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../interfaces/interfaces";
import {Storage} from "@ionic/storage-angular";
import {NavController} from "@ionic/angular";

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null

  constructor(private http: HttpClient, private storage: Storage, private navCtrl: NavController) {
    this.storage.create();
  }

  async login(username: string, email: string): Promise<boolean> {

    return new Promise(resolve => {
      this.http.get<User[]>(`${URL}/users?username=${username}`)
        .subscribe(res => {
          if (res.length > 0) {
            const user = res[0];
            if (user.email === email) {
              this.saveUser(user)
              resolve(true);
            } else {
              this.clearData();
              resolve(false)
            }
          } else {
            this.clearData();
            resolve(false)
          }
        })
    })
  }

  async saveUser(user: User) {
    this.user = user;
    await this.storage.set('user', user);
  }

  async clearData() {
    this.user = null
    await this.storage.clear()
  }

  private async getLocalUser(): Promise<User | null> {
    return this.user = await this.storage.get('user') || null;
  }

  async getUser(): Promise<User> {
    await this.isAuth()
    return this.user!
  }

  async isAuth() {
    const user = await this.getLocalUser();
    this.user = user;
    const existUser = Boolean(user)
    if (!existUser) {
      await this.navCtrl.navigateRoot('/login')
    }
    return existUser
  }

  async logout() {
    await this.clearData()
    await this.navCtrl.navigateRoot('/login')
  }

}
