import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { LobbyComponent } from './lobby/lobby.component';

import { SocketService } from "./socket.service";

const ROUTES = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreatorComponent
  },
  {
    path: 'lobby/:id',
    component: LobbyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
