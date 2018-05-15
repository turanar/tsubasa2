import { Component } from '@angular/core';
import { Player } from "../../../shared/player";
import { PlayerData } from "../../../shared/playerdata";
import {PlayerShareService} from "../../../player-share.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent {
  public player: Player;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public page: number = 0;

  constructor(playerShareService : PlayerShareService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if (params['playerId']) {
        playerShareService.load(params['playerId']);
      }
      this.player = playerShareService.player;
    });
  }

  onChange(event) {

  }

  swipe(action: string) {
    console.log(action);

    if (action === 'swipeleft') {
      this.page = (this.page >= 4) ? 4 : this.page + 1;
    }

    if (action === 'swiperight') {
      this.page =  (this.page <= 0) ? 0 : this.page - 1;
    }

    console.log(this.page);
  }
}
