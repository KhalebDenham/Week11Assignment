// each box on the grid of tic tac toe
let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');


//represents if the click is going to be an x or an o
let player1 = "X";
let player2 = "O";


//turn order, can only be between 5-9 turns 
let turn = 0;

// determine if the player has won at the end of every round
let winner = false;



$(document).ready(function() { //tells document to wait until it is ready to hide the alerts
    $("#alertStart").hide();
    $("#alertWinner").hide();
    $("#alertDraw").hide();
});

const winningOutcomes = [ //array of winning outcomes
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8], //horizontal rows
    [box0, box4, box8], [box2, box4, box6], //diagonal
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8] //vertical columns
]

//keep track of whos turn it is/current player
let currentPlayer=" ";



const startGame = () => {
    console.log("Start Game!");
    console.log(turn++);
    currentPlayer = player1;
    console.log(currentPlayer);


        


    // Show start alert here

    $("#alertStart").show();
    
    $('.box').on('click', function() {
        $("#alertStart").hide();

        $(this).text(currentPlayer);

        if(turn > 4) {
            //check for winner of game
            console.log("winner?");
        }
        
        if(currentPlayer === player1) {
            currentPlayer = player2;
            console.log(turn++);
        } else {
            currentPlayer = player1;
        }
    })
}


// event listener

document.getElementById('startBtn').addEventListener('click', () => startGame()); //click start game button, gets id of button and adds an event listener for the click, and then calls the function startGame

document.getElementById("resetBtn").addEventListener('click', () => document.location.reload(true)); //reset button click and reset / reload of page