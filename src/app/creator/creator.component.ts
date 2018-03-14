import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

class Game {
  maps: string[];
}
class Mode {
  name: string;
}
class Answer {
  id: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  selectedGame: string;
  selectedMode: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.stage = 0;
    this.http.get<string[]>('/api/games').subscribe(ans => {
      this.games = ans;
      console.log(this.games);
    });
  }

  selectGame(game) {
    this.selectedGame = game;
    this.stage = 1;
  }

  selectMode(mode) {
    this.selectedMode = mode.name;
    this.stage = 2;
  }

  createLobby() {
    this.http.post<Answer>('/api/lobby', {game: this.selectedGame, mode: this.selectedMode}, httpOptions).subscribe(ans => {
      this.router.navigate(['/lobby/' + ans.id]);
    },
    err => {
      console.log(err);
      alert('Something went wrong!');
    });
  }
}
