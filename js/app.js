import { Game } from "./modules/game.js";
import { Board } from "./modules/board.js";

document.addEventListener("DOMContentLoaded", function () {
  const appContainerRef = document.getElementById("app");

  if (!appContainerRef) {
    throw new Error("App container not found!");
  }

  const board = new Board(appContainerRef);
  const game = new Game({ board });

  game.init();
});
