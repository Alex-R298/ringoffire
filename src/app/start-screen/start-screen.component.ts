import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from '../models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  newGame() {
    //start new game logic
    let game = new Game();
    this.firestore
    .collection('games')
    .add(game.toJson())
    .then((gameInfo: any) => {
      console.log(gameInfo);
      
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
  }

}
