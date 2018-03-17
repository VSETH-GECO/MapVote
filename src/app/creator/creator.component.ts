import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

class Game {
  maps: string[];
  modes: string[];
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
  games: Game[];
  stage: number;
  gameNames: string[];

  selectedGame: string;
  selectedMode: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<Game[]>('/api/game/all').subscribe(ans => {
      this.games = ans;
      console.log(this.games);
      this.gameNames = Object.keys(ans);
      console.log(this.gameNames);
      this.stage = 0;
    });
  }

  selectGame(game) {
    this.selectedGame = game;
    this.stage = 1;
  }

  selectMode(mode) {
    this.selectedMode = mode;
    this.stage = 2;
  }

  createLobby() {
    this.http.post<{id: string}>('/api/lobby', {game: this.selectedGame, mode: this.selectedMode}, httpOptions).subscribe(ans => {
      this.router.navigate(['/lobby/' + ans.id]);
    },
    err => {
      console.log(err);
      alert('Something went wrong!');
    });
  }
}
