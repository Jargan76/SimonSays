
// starts the game and resets all values
function startGame() {
  // set counter to 0 as visual game start
  clickcount = 0;
  counter = 0;
  toWin = 0;

  // make sure that it starts on first track
  trackNumber = 0;
  // clear and make sure that arrays are empty
  pattern = [];
  userPattern = [];
  // make the first part of the new pattern
  makePattern();
  // now we play the new pattern for the player.
  chooseBtn(pattern[0]);
  // wait for player responce.
  playerTurn = true;
}
