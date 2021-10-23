import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameMapComponent } from './game/sheet-components/game-map/game-map.component';
import { MapTileComponent } from './game/sheet-components/map-tile/map-tile.component';
import { ReputationTrackerComponent } from './game/sheet-components/reputation-tracker/reputation-tracker.component';
import { RoundTrackerComponent } from './game/sheet-components/round-tracker/round-tracker.component';
import { NotesAreaComponent } from './game/sheet-components/notes-area/notes-area.component';
import { EconomyAreaComponent } from './game/sheet-components/economy-area/economy-area.component';
import { GameInfoComponent } from './game/sheet-components/game-info/game-info.component';
import { ActionButtonBarComponent } from './game/action-area/action-button-bar/action-button-bar.component';
import { DieRollerComponent } from './game/action-area/die-roller/die-roller.component';
import { GameHeaderBarComponent } from './game/action-area/game-header-bar/game-header-bar.component';
import { NotificationComponent } from './common/notification/notification.component';
import { GameBoardComponent } from './game/game-board.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GameBoardComponent,
    AppComponent,
    GameMapComponent,
    MapTileComponent,
    ReputationTrackerComponent,
    RoundTrackerComponent,
    NotesAreaComponent,
    EconomyAreaComponent,
    GameInfoComponent,
    ActionButtonBarComponent,
    DieRollerComponent,
    GameHeaderBarComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
