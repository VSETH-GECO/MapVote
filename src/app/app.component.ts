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
  @Input() voteID: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  joinLobby() {
    console.log(this.voteID);

    this.http.get<Answer>('/api/vote/' + this.voteID).subscribe(ans => {
      if (ans.exists) {
        this.router.navigate(['/vote/' + this.voteID]);
      } else {
        alert('Invalid vote id!');
      }
    });
  }
}
