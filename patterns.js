// picks a random number 1-4 and puts it in the pattern array
function makePattern() {
  pattern.push(Math.ceil(random(4)));
}
function chooseBtn(patrn){
    switch (patrn) {
      case 1:
      // does CSS changes. See Box.js realeased() for more
        vanadium.down();
      // set to true to start the timer for btn.up()
        startTime = true;
        break;
      case 2:
      // does CSS changes. See Box.js realeased() for more
        sulfur.down();
      // set to true to start the timer for btn.up()
        startTime = true;
        break;
      case 3:
      // does CSS changes. See Box.js realeased() for more
        gold.down();
      // set to true to start the timer for btn.up()
        startTime = true;
        break;
      case 4:
      // does CSS changes. See Box.js realeased() for more
        cerium.down();
      // set to true to start the timer for btn.up()
        startTime = true;
        break;
    }
}
// plays the pattern
function playPat(){
  // starts at 0 for pattern index 0.
    let int = 0;
    // every 600ms play the pattern sound
    let playThem = setInterval(function(){
        chooseBtn(pattern[int]);
        // Increases with each interval
        int++;
        // once it has played the full pattern STOP!
        if(int >= pattern.length){
            clearInterval(playThem)
        }
    },600);
}
