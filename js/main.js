
// /*----- constants -----*/ 

// /*----- app's state (variables) -----*/ 
let move, turn, msg, result, winner, board, number;

let moveCounter = 0;
// /*----- cached element references -----*/ 
const resetBtn = document.getElementById("reset");
// const s0 = document.getElementById("s0");
// const s1 = document.getElementById("s1");
// const s2 = document.getElementById("s2");
// const s3 = document.getElementById("s3");
// const s4 = document.getElementById("s4");
// const s5 = document.getElementById("s5");
// const s6 = document.getElementById("s6");
// const s7 = document.getElementById("s7");
// const s8 = document.getElementById("s8");
// const square = document.querySelectorAll('.square');

// /*----- event listeners -----*/ 
resetBtn.addEventListener('click', startGame)

// square.addEventListener('click', nextMove(square));
// s1.addEventListener('click', nextMove('#s1'));
// s2.addEventListener('click', nextMove('#s2'));
// s3.addEventListener('click', nextMove('#s3'));
// s4.addEventListener('click', nextMove('#s4'));
// s5.addEventListener('click', nextMove('#s5'));
// s6.addEventListener('click', nextMove('#s6'));
// s7.addEventListener('click', nextMove('#s7'));
// s8.addEventListener('click', nextMove('#s8'));

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

// function eventListen(id) {
//     return document.getElementById(id).addEventListener('click', nextMove);
// }

// for (i = 0; i < 9; i++) {
//     console.log(eventListen(`s${i}`));
//     eventListen(`s${i}`);
// }    

function nextMove(square) {
    if (document.winner != null) {
      setMessage(document.winner + " already won the game");
    }
    else if (document.winner == null && moveCounter  < 9 && square.innerText == ""){
      square.innerText = document.turn;
      switchTurn();
    } else if (document.winner == null && moveCounter < 9 && square.innerText !== "") {
        setMessage("That square is already used.");
    } else {
        setMessage("It was a draw. Reset game!");
    }
  }

// function nextMove(square) {
//     if (moveCounter < 9 && square.innerText == "") {
//         square.innerText = document.turn;
//         switchTurn(); 
//     } else if (document.winner !== null) {
//         setMessage(document.turn + " already won.")
//     } else if(moveCounter >= 9 && document.winner == null) {
//         setMessage("It is a draw!");
//     } else if(moveCounter < 9 && square.innerText !== "") {
//         setMessage("Pick another square!");
//     }
// } 

function switchTurn() {
    if (checkForWinner(document.turn)) {
      setMessage("Congratulations, " + document.turn + " ! You win!");
      document.winner = document.turn;
    }
    else if (document.turn == "X") {
        moveCounter ++;
        document.turn = "O";
        setMessage("It's " + document.turn + " 's turn")
 
    } else {
    moveCounter ++;
       document.turn = "X";
       setMessage("It's " + document.turn + " 's turn")
 
    }
 }
// let moveCounter = 0;

// function switchTurn() {
//     if(checkForWinner(document.turn)) {
//         setMessage("Congrats " + document.turn + ", you have won!")
//         document.winner = document.turn;
//     } else if(document.turn == "X") {
//         moveCounter += 1;
//         document.turn = "0";
//         setMessage("It is " + document.turn +"'s turn!");
//     } else if (document.turn == "O") {
//         moveCounter += 1;
//         document.turn = "X";
//         setMessage("It is " + document.turn +"'s turn!");
//     } 
//     return moveCounter;
// }

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