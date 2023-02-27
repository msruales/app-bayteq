import {Component} from '@angular/core';
import {LocalDataService} from "../../services/local-data.service";
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  favorites: User[] = []

  constructor(private localData: LocalDataService) {
  }

  async ionViewWillEnter() {
    this.favorites = await this.localData.loadFavorites()
  }
}
