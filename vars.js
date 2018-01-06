// names of the elements used
let gold;
let vanadium;
let cerium;
let sulfur;
// names of the pieces used on control panel
let panelBack;
let start;
let startText;
let strickText;
let display;
// Booleans
let playerTurn;
let startTime = false;
let strict = false;
// used for the frame rate affects the timer btn.up function
let fr = 60;
// holds our sounds once loaded
let sounds = [];
// this is Simons pattern
let pattern = [];
// Users pattern held here
let userPattern = [];
// counter is used to display on the canvas
let counter = "press start";
// keeper and timer are used in the countTimer() which sits in draw()
let keeper = 0;
let timer = 0;
// ttoWin starts at 0
// if you want to change win conditions look in isMatch function
let toWin = 0;
// keeps track of the users clicks used in CreateBox()-flasher(),wrongAnsr()
let clickCount = 0;
// background image
let wood;