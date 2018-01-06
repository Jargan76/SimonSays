
function CreateBox(Element, commonName, atomicNumber) {
  // uses the atomic number for differnt tags
  this.aNum = atomicNumber;
  // next 2 are used by Simon
  this.down = ()=>flasher();
  this.up = ()=>released();

  let black = createDiv("");
  let btn = createButton("");
  let symbol = createP(Element);
  let name = createP(commonName);
  let num = createP(atomicNumber);
  btn.addClass("main");
  btn.value(commonName);
  btn.id("btn" + this.aNum);
  btn.mousePressed(pressed);
  btn.mouseReleased(released);
  black.addClass("black");
  black.id("black" + this.aNum);
  black.parent("btn" + this.aNum);
  symbol.addClass("symbol");
  symbol.parent("black" + this.aNum);
  name.addClass("name");
  name.parent("black" + this.aNum);
  num.addClass("num");
  num.parent("black" + this.aNum);
  // when the button is pressed run these
  function pressed() {
    flasher();
    if (commonName === "Vanadium"){
      if(pattern[clickCount] === 1){
        // push button choice into the user pattern array
        userPattern.push(1);
        // add to the clickcount
        clickCount++;
      }else{
        wrongAnsr();
      }
    }
    if (commonName === "Sulfur"){
      if(pattern[clickCount] === 2){
        // push button choice into the user pattern array
        userPattern.push(2);
        // add to the clickcount
        clickCount++;
      }else{
        wrongAnsr();
      }
    }
    if (commonName === "Gold"){
      if(pattern[clickCount] === 3){
        // push button choice into the user pattern array
        userPattern.push(3);
        // add to the clickcount
        clickCount++;
      }else{
        wrongAnsr();
      }
    }
    if (commonName === "Cerium"){
      if(pattern[clickCount] === 4){
        // push button choice into the user pattern array
        userPattern.push(4);
        // add to the clickcount
        clickCount++;
      }else{
        wrongAnsr();
      }
    }
    if(userPattern.length > 0){
        if(userPattern.length === pattern.length){
            clickCount = 0;
            isMatch();
        }
    }
  }
  // when wrong do this
  function wrongAnsr(){
    // start click count over
    clickCount = 0;
    // empty the user array
    userPattern = [];
    // let the user know that they missed
    counter = "X";
    if(strict === true){
      // on strict restart the game
      restartGame();
    }else{
      // small pause before showing the score again
      setTimeout(()=>counter = toWin, 1500);
      // replay the pattern for the user
      playPat();
    }
  }
  // some css style changes
  function released() {
    if (commonName === "Vanadium") {
      let elt = document.getElementById("btn23");
      elt.style.backgroundColor = "#EEE";
      elt.style.color = "#EEE";
      elt.style.boxShadow = "5px 5px 5px #333";
    }
    if (commonName === "Sulfur") {
      let elt = document.getElementById("btn16");
      elt.style.backgroundColor = "#EEE";
      elt.style.color = "#EEE";
      elt.style.boxShadow = "5px 5px 5px #333";
    }
    if (commonName === "Gold") {
      let elt = document.getElementById("btn79");
      elt.style.backgroundColor = "#EEE";
      elt.style.color = "#EEE";
      elt.style.boxShadow = "5px 5px 5px #333";
    }
    if (commonName === "Cerium") {
      let elt = document.getElementById("btn58");
      elt.style.backgroundColor = "#EEE";
      elt.style.color = "#EEE";
      elt.style.boxShadow = "5px 5px 5px #333";
    }
  }
  function flasher(){
    if (commonName === "Vanadium") {
      let elt = document.getElementById("btn23");
      elt.style.backgroundColor = "#3C8D2F";
      elt.style.color = "#3C8D2F";
      elt.style.boxShadow = "2px 2px 2px #333";
      sounds[0].play();
    }
    if (commonName === "Sulfur") {
      let elt = document.getElementById("btn16");
      elt.style.backgroundColor = "#0D297C";
      elt.style.color = "#0D297C";
      elt.style.boxShadow = "2px 2px 2px #333";
      sounds[1].play();
    }
    if (commonName === "Gold") {
      let elt = document.getElementById("btn79");
      elt.style.backgroundColor = "#552B72";
      elt.style.color = "#552B72";
      elt.style.boxShadow = "2px 2px 2px #333";
      sounds[2].play();
    }
    if (commonName === "Cerium") {
      let elt = document.getElementById("btn58");
      elt.style.backgroundColor = "#B85300";
      elt.style.color = "#B85300";
      elt.style.boxShadow = "2px 2px 2px #333";
      sounds[3].play();
    }
    if(playerTurn === false){
      startTime = true;
    }
  }
}