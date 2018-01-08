//if we have a match do this..
function isMatch() {
    // reset clixkcount for next time
    clickCount = 0;
    // add one more to the win count
    toWin++;
    //update the new score to the canvas
    counter = toWin;
    // WOW, play a 20 part pattern to WIN!
    if(toWin === 20){
        // let the user know that they won!
        counter = "WINNER!!";
        // clear everything for new game
        userPattern = [];
        pattern =[];
        playerTurn = null;
        toWin = 0;
        // slight pause before it stops showing WINNER!!
        setTimeout(()=>counter = toWin, 1500);
    }

    // Let Simon know that the player is done.
    setTimeout(()=>playerTurn = false, 1200);
}