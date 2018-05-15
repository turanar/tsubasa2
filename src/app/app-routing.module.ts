import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseStatsComponent } from "./calculator/pages/base-stats/base-stats.component";
import { SpecialSkillsComponent } from "./calculator/pages/special-skills/special-skills.component";
import {ListingComponent} from "./listing/pages/listing/listing.component";

const routes: Routes = [
  { path: '', redirectTo: '/base-stats', pathMatch: 'full' },
  { path: 'base-stats/:playerId', component: BaseStatsComponent },
  { path: 'base-stats', component: BaseStatsComponent },
  { path: 'special-skills', component: SpecialSkillsComponent },
  { path: 'listing', component: ListingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
