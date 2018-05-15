import { Injectable } from '@angular/core';
import {Player} from "./shared/player";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {PlayerData} from "./shared/playerdata";
import {PlayerListService} from "./player-list.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerShareService {
  public player: Player;

  constructor(protected localStorage: LocalStorage, protected playerListService: PlayerListService) {
    this.localStorage.getItem<PlayerData>('player.data').subscribe((data) => {
      if (data != null) {
        if (data.bonus['conf'] !== undefined) {
          this.player.data = new PlayerData;
          this.localStorage.setItemSubscribe('player.data', this.player.data);
        } else {
          this.player.data = data;
        }
      }
    });
  }

  onChange() {
    this.localStorage.setItemSubscribe('player.data', this.player.data);
  }

  load(playerId: number) {
    this.playerListService.fetch('tsubasa', 'player', playerId).then(res => {
      this.player.data.base = res;
      this.onChange();
    });
  }
}
