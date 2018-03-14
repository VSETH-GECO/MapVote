import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

class Game {
  maps: string[];
}
class Mode {
  name: string;
}

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  /* games: Game[] = [
    {
      name: 'Overwatch',
      maps: [
        {name: 'Château Guillard'},
        {name: 'Dorado'},
        {name: 'Eichenwalde'},
        {name: 'Hanamura'},
        {name: 'Hollywood'},
        {name: 'Horizon Lunar Colony'},
        {name: 'Ilios'},
        {name: 'King\'s Row'},
        {name: 'Lijiang Tower'},
        {name: 'Nepal'},
        {name: 'Numbani'},
        {name: 'Oasis'},
        {name: 'Route 66'},
        {name: 'Temple of Anubis'},
        {name: 'Volskaya Industries'},
        {name: 'Watchpoint: Gibraltar'}
        ]
    },
    {
      name: 'Counter Strike: GO',
      maps: [
        {name: 'Flashpoint'},
        {name: 'Test 1'}
        ]
    }
  ]; */
  modes: Mode[] = [
    {name: "ping-pong"},
  ];
  games: string[];
  stage: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.stage = 0;
    this.http.get<string[]>(window.location.origin + '/api/games').subscribe(ans => {
      this.games = ans;
      console.log(this.games);
    });
  }

  selectGame(game) {
    console.log('Game:', game);
    this.stage = 1;
  }

  selectMode(mode) {
    console.log('Mode', mode);
    this.stage = 2;
  }

  createLobby() {
    // TODO
  }
}
