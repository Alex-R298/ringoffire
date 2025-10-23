export class Game {
  // Game model properties and methods would go here
  public players: string[] = [];
  public stack: string[] = [];
  public playedCard: string[] = [];
  public currentPlayer: number = 0;
  public pickCardAnimation: boolean = false;
  public currentCard: string = '';

    constructor() {
        for (let i = 1; i < 14; i++) {
        this.stack.push('ace_' + i);
        this.stack.push('hearts_' + i);
        this.stack.push('diamonds_' + i);
        this.stack.push('clubs_' + i);
    }

    shuffle(this.stack);
}

public toJson() {
  return {
    players: this.players,
    stack: this.stack,
    playedCard: this.playedCard,
    currentPlayer: this.currentPlayer,
    pickCardAnimation: this.pickCardAnimation,
    currentCard: this.currentCard
  };
}


}

function shuffle(stack: string[]) {
  let currentIndex = stack.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [stack[currentIndex], stack[randomIndex]] = [
      stack[randomIndex], stack[currentIndex]];
  }
}