function countTimer(){
  function count(){
    // timer uses the frame rate to count up
    timer++
    // once it reaches 30 it starts over
    if(timer === 14){
      timer = 0;
      // add one to the keeper time.
      keeper++;
    }
  }
  // listening to start the count
  if(startTime === true){
    count()
  }
  if(keeper === 1){
    // stop the clock
    startTime = false;
    // reset for use next time
    keeper = 0;
    // now make sure that all buttons are up.
    vanadium.up();
    sulfur.up();
    gold.up();
    cerium.up();
  }
}