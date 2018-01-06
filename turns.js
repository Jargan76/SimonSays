// when it is time for Simon to play
function simonsTurn(){
    // add to the simon array
    makePattern();
    // make sure that we are starting fresh each time
    userPattern = [];
    // play the new addition to the pattern
    playPat();
    // Okay we are done here now. Players Turn!
    playerTurn = true;
}

