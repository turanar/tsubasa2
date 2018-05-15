import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PlayerShareService } from "./player-share.service";
import { Player } from "./shared/player";
import { TdNavigationDrawerComponent } from "@covalent/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerShareService]
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  player: Player;
  private _opened: boolean = false;
  @ViewChild(TdNavigationDrawerComponent) drawer : TdNavigationDrawerComponent;

  constructor(protected playerShareService : PlayerShareService) {
    this.player = new Player;
    playerShareService.player = this.player;
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  onChange(event) {
    this.playerShareService.onChange();
    this.drawer.close();
  }

  ngAfterViewInit(): void {

  }
}
