
// /*----- constants -----*/ 

// /*----- app's state (variables) -----*/ 
let move, turn, msg, result, winner, board, number;

let moveCounter = 0;
// /*----- cached element references -----*/ 
const resetBtn = document.getElementById("reset");


// /*----- event listeners -----*/ 
resetBtn.addEventListener('click', startGame)

// /*----- functions -----*/

startGame();

function startGame() {
    for (var i = 0; i < 9; i++) {
        clearBox(i);
    }
    moveCounter = 0;
    document.turn = "X";
    document.winner = null;
    setMessage("Player " + document.turn + " gets to start.");
}    

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
      setMessage(document.winner + " already won the game");
    }
    else if (document.winner == null && moveCounter  < 8 && square.innerText == ""){
      square.innerText = document.turn;
      switchTurn();
    } else if (document.winner == null && moveCounter < 8 && square.innerText !== "") {
        setMessage("That square is already used.");
    } else {
        square.innerText = document.turn;
        setMessage("It was a draw. Reset game!");
    }
  }

function switchTurn() {
    if (checkForWinner(document.turn)) {
      setMessage("Congratulations, " + document.turn + "! You win!");
      document.winner = document.turn;
    }
    else if (moveCounter < 8 && document.turn == "X") {
        moveCounter ++;
        document.turn = "O";
        setMessage("It's " + document.turn + " 's turn")
 
    } else if (moveCounter < 8 && document.turn == "O") {
    moveCounter ++;
       document.turn = "X";
       setMessage("It's " + document.turn + " 's turn")
    } else if(document.winner == null && moveCounter == 9) {
        square.innerText = document.Turn;
        setMessage("It was a draw. Reset game!");
    }
 }

function checkForWinner(move) {
    var result = false;
    if (checkRow(0, 1, 2, move) || 
    checkRow(3, 4, 5, move) ||
    checkRow(6, 7, 8, move) ||
    checkRow(0, 3, 6, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(0, 4, 8, move) ||
    checkRow(2, 4, 6, move)) {
        result = true;
    } 
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    } 
    return result;
} 

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}