import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

class Answer {
  exists: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Map Vote';
  @Input() lobbyID: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  joinLobby() {
    console.log(this.lobbyID);

    this.http.get<Answer>('/api/lobby/' + this.lobbyID).subscribe(ans => {
      if (ans.exists) {
        this.router.navigate(['/lobby/' + this.lobbyID]);
      } else {
        alert('Invalid lobby id!');
      }
    });
  }
}
