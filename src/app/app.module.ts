import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerStatsComponent } from './calculator/components/player-stats/player-stats.component';
import { PlayerShareService } from "./player-share.service";
import { PlayerStatsResultComponent } from './calculator/components/player-stats-result/player-stats-result.component';
import { BaseStatsComponent } from './calculator/pages/base-stats/base-stats.component';
import { FormsModule } from "@angular/forms";
import { HammerGestureConfig } from "./myhammer";
import { SpecialSkillsComponent } from './calculator/pages/special-skills/special-skills.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentStepsModule } from '@covalent/core';
import { MatIconModule, MatListModule, MatSlideToggleModule } from '@angular/material';
import {ListingComponent} from "./listing/pages/listing/listing.component";
import {PlayerListService} from "./player-list.service";


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20, direction: 6},
    'pan':   {direction: 6, threshold: 0}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatsComponent,
    PlayerStatsResultComponent,
    BaseStatsComponent,
    SpecialSkillsComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    BrowserAnimationsModule
  ],
  providers: [PlayerShareService, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }, PlayerListService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
