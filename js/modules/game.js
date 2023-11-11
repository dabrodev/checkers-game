export class Game {
  constructor(modules) {
    this.board = modules.board;
  }

  init() {
    this.board.initBoard();
  }
}
