export class Board {
  boardRef = null;

  constructor(boardRef) {
    this.boardRef = boardRef;
  }

  initBoard() {
    this.createBoard();
    console.log("Board initialized");
  }

  createBoard() {
    const boardGrid = document.createElement("div");
    boardGrid.id = "board";

    // Loop to create 100 divs for the 10x10 board
    for (let i = 0; i < 100; i++) {
      const square = document.createElement("div");
      boardGrid.appendChild(square);
    }

    this.boardRef.appendChild(boardGrid);
  }
}
