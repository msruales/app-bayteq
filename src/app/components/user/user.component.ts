import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/interfaces";
import {LocalDataService} from "../../services/local-data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() user: User = {} as User
  iconName: string = 'star-outline'

  constructor(private localData: LocalDataService) {
  }


  async ngOnInit() {
    const exist = await this.localData.existFavorite(this.user.id);
    this.existFavorite(exist)
  }

  async favorite() {
    const exist = await this.localData.saveFavorite(this.user);
    this.existFavorite(exist)
  }

  existFavorite(exist: boolean) {
    if (exist) {
      this.iconName = 'star'
    } else {
      this.iconName = 'star-outline'
    }
  }

}
