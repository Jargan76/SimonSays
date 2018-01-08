// All the parts that make up the control panel
function createControlPanel() {
  //this is the large grey part of panel
  panelBack = createDiv("");
  panelBack.addClass("panel");
  panelBack.id("control-panel");
  //this shows the count on how many cycles you have finished
  display = createCanvas(150, 50);
  display.addClass("display");
  display.parent("control-panel");
  //start button
  fill(33);
  startText = createP("START");
  startText.addClass("startText");
  startText.parent("control-panel");
  start = createButton("");
  start.addClass("panel-btn");
  start.addClass("start");
  start.parent("control-panel");
  start.mousePressed(startGame);
  // strick mode on or off
  strickText = createP("STRICT");
  strickText.addClass("strickText");
  strickText.parent("control-panel");
  strick = createButton("");
  strick.addClass("panel-btn");
  strick.addClass("strick");
  strick.parent("control-panel");
  strick.mouseClicked(toggleStrict);
}
// used by strict button flips true\false
function toggleStrict(){
  // if false make true
  if(strict === false){
    strict = true;
  // if true make false.
  }else{
    strict = false;
  }
}
