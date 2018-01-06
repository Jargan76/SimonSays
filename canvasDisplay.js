// this displays the count on the control panel
function displayText() {
  // used to align the text on the canvas
  let centerAdjust = 18;
  background(230);
  fill(33);
  // if not a number change the font size smaller
  if (counter === "press start" || counter === "WINNER!!") {
    textSize(24);
  } else {
    // since number make larger
    textSize(32);
    //addjust align depending on single or multi digits
    if (counter < 10) {
      centerAdjust = width / 2 - 7;
    } else {
      centerAdjust = width / 2 - 15;
    }
  }
  // display the text on the canvas
  text(counter, centerAdjust, 35);
  // when strict is active, show red dot on canvas
  if(strict){
    fill(250, 12, 12);
    ellipse(8,8,15);
  }
}