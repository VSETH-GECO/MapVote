import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { VoteComponent } from './vote/vote.component';

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
    path: 'vote',
    component: VoteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    SocketService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
