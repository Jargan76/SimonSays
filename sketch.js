// request the sounds from  FCC site
// If there is an issue with loading at start -- THIS IS THE PLACE!!!
// it is a cross-origin issue.
// Use http://crossorigin.me/ or  https://cors-anywhere.herokuapp.com/

function preload() {
  for (let i = 0; i <= 3; i++) {
    let num = i + 1;
    // gets and saves the sounds in the sounds array.
    sounds[i] = loadSound(
      `https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/freecodecamp/simonSound${num}.mp3`);
  }
}
// straight forward .. loads the divs,buttons, and stuff
function setup() {
  // set the frame rate for counting 60fps = 1ms
  frameRate(60);
  // load up the control panle parts
  createControlPanel();
  // load up the element buttons
  createTouchPads();
}
function draw() {
  // updates the counter text on the canvas
  displayText();
  // listens to be turned on
  countTimer();
  // Simon waiting for his turn.
  if(playerTurn === false){
    simonsTurn();
  }
}