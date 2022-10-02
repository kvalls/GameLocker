import { Component } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  games: any = [];

  constructor(private gameService: GameService) {
    this.getAllGames();
  }

  getAllGames(){
    this.gameService.getAllGames().subscribe(data => {
      console.log("data");
      console.log(data);
      this.games = data;
    });
  }

}
