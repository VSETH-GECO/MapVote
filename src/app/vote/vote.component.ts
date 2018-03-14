import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SocketService } from "../socket.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  successMessage: string;

  constructor(private socket: SocketService, private route: ActivatedRoute) {
    // Request to join the lobby with the id from the url
    this.socket.send('join lobby', {id: this.route.snapshot.params['id']});

    // Listen if join request was accepted or denied
    this.socket.subscribeTo('join lobby', msg => {
      if (msg) {
        this.successMessage = 'Joined lobby!';
      } else {
        alert('No lobby with this id exists!');
      }
    })
  }

  ngOnInit() {
  }

}
