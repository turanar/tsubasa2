import { Component, OnInit, Input } from '@angular/core';
import { Player } from "../../../shared/player";
import { Stats } from "../../../shared/stats";
import {PlayerShareService} from "../../../player-share.service";

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  @Input() stats: Stats;
  @Input() player: Player;
  @Input() bonus: boolean = false;

  constructor(protected playerShareService: PlayerShareService) {

  }

  ngOnInit() {}

  onChange(event) {
    this.playerShareService.onChange();
  }
}
