import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SocketService } from "../socket.service";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  successMessage: string;
  selectTeam: boolean;

  constructor(private socket: SocketService, private route: ActivatedRoute) {
    // Request to join the lobby with the id from the url
    this.socket.send('join lobby', {id: this.route.snapshot.params['id']});

    // Listen if join request was accepted or denied
    this.socket.subscribeTo('join lobby', msg => {
      if (msg) {
        this.successMessage = 'Joined lobby!';
        this.selectTeam = true;
      } else {
        alert('No lobby with this id exists!');
      }
    });

    // Listen if team join was successful
    this.socket.subscribeTo('join team', msg => {
      if (msg) {
        this.selectTeam = false;
      } else {
        alert('Could not join team');
      }
    });
  }

  ngOnInit() {
  }

  joinTeam(team: number) {
    this.socket.send('join team', {team: team});
  }
}
