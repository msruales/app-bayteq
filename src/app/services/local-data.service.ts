import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {User} from "../interfaces/interfaces";
import {UiService} from "./ui.service";

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  users: User[] = []

  constructor(private storage: Storage, private uiService: UiService) {
    this.init();
  }

  async init() {
    await this.storage.create()
    await this.loadFavorites()
  }

  async saveFavorite(user: User) {
    let message = ''
    const exist = Boolean(this.users.find(u => u.id === user.id))

    if (exist) {
      this.users = this.users.filter(u => u.id !== user.id)
      await this.storage.set('favorites', this.users)
      message = 'Remove of Favorites'
    } else {
      this.users = [user, ...this.users]
      await this.storage.set('favorites', this.users)
      message = 'Add to Favorites'
    }
    await this.uiService.presentToast(message);
    return !exist
  }

  async loadFavorites() {
    const favorites = await this.storage.get('favorites')
    this.users = favorites || [];
    return this.users;
  }

  async existFavorite(id: number) {
    await this.loadFavorites()
    return Boolean(this.users.find(u => u.id === id));
  }
}
