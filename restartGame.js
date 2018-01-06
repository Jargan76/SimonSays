// this function is used on strict mode
// it pauses before starting a fresh new game.
function restartGame(){
    let countr = 0;
    let pauseIt = setInterval(function(){
            countr++;
            if(countr >= 3){
                startGame();
                clearInterval(pauseIt);
            }
        },600);
}