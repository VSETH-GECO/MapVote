import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


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
    path: 'vote/:id',
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
