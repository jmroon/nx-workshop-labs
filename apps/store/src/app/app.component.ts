import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatRating } from '@bg-hoard/store/util-formatters';
import {Game} from '@bg-hoard/util-interface';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = this.http.get<Game[]>('/api/games');
}
