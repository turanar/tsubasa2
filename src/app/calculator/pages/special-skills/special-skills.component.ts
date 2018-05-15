import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Player } from "../../../shared/player";
import { PlayerShareService } from "../../../player-share.service";

@Component({
  selector: 'app-base-stats',
  templateUrl: './special-skills.component.html',
  styleUrls: ['./special-skills.component.css']
})
export class SpecialSkillsComponent {
  public player: Player;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public page: number = 0;

  constructor(protected playerShareService : PlayerShareService) {
    this.player = playerShareService.player;
  }

  onChange(event) {
    this.playerShareService.onChange();
  }

  swipe(action: string) {
    console.log(action);

    if (action === 'swipeleft') {
      this.page = (this.page >= 3) ? 3 : this.page + 1;
    }

    if (action === 'swiperight') {
      this.page =  (this.page <= 0) ? 0 : this.page - 1;
    }
  }
}
