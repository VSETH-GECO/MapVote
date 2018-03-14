import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SocketService } from "../socket.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private socket: SocketService, private route: ActivatedRoute) {
    this.socket.send('vote state', {id: this.route.snapshot.params['id']});
    this.socket.send('', {});


    this.socket.subscribeTo('vote exists', msg => {
      console.log('2nd:', msg);
    });
  }

  ngOnInit() {
  }

}
