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


//keep track of whos turn it is/current player
let currentPlayer=" ";


const winningOutcomes = [ //array of winning outcomes
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8], //horizontal rows
    [box0, box4, box8], [box2, box4, box6], //diagonal
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8] //vertical columns
];

const endGame = () => {
    console.log("Game Over!");

    $(".box").css('pointer-events', "none"); //calls out all objects with box class and makes them not clickable;

    $("#p1").removeClass("bg-light border border-info");
    $("#p2").removeClass("bg-light border border-info");
};

const checkWinner = (currentPlayer, a, b, c) => {

    if(a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer ) {
        winner = true;

        console.log(`Found winner, it is the ${currentPlayer}!`);

        a.removeClass('text-info bg-dark');
        a.addClass('text-dark bg-info');
        b.removeClass('text-info bg-dark');
        b.addClass('text-dark bg-info');
        c.removeClass('text-info bg-dark');
        c.addClass('text-dark bg-info');

        if(currentPlayer === "X") {
            currentPlayer = "player 1";
        } else {
            currentPlayer = "player 2";
        }

        $("alert").text(`Game Over! ${currentPlayer}`);
        $("#alertWinner").show();


        endGame();

    }
};

const checkOutcomes = () => {
    checkWinner(currentPlayer, ...winningOutcomes[0]); //spreads the elementings of winning outcomes between the a b and c conditionals for the checkWinner function
    checkWinner(currentPlayer, ...winningOutcomes[1]); //does so for all 9 elements in the array
    checkWinner(currentPlayer, ...winningOutcomes[2]);
    checkWinner(currentPlayer, ...winningOutcomes[3]);
    checkWinner(currentPlayer, ...winningOutcomes[4]);
    checkWinner(currentPlayer, ...winningOutcomes[5]);
    checkWinner(currentPlayer, ...winningOutcomes[6]);
    checkWinner(currentPlayer, ...winningOutcomes[7]);

    if (turn === 9 && winner === false) {
        endGame();
        $("#alertDraw").show();
    } 
};

const startGame = () => {
    console.log("Start Game!");
    console.log(turn++);
    currentPlayer = player1;
    console.log(currentPlayer);

    $('#p1').addClass("bg-light border border-info"); //creates class border and adds descriptive info for player1 



    // Show start alert here

    $("#alertStart").show();
    
    $('.box').on('click', function() {
        $("#alertStart").hide();

        $(this).text(currentPlayer);

        if(turn > 4) {
            //check for winner of game
            console.log("winner?");
            checkOutcomes();
        }

        if (winner === false) {
            
        
        
            if (currentPlayer === player1) { //if current player is equal truly to player1 
            currentPlayer = player2; //become player 2
            console.log(turn++); //turn increment once
            $('#p2').addClass("bg-light border border-info"); //adding class to the player 2 class
            $('#p1').removeClass("bg-light border border-info");
            } else { //otherwise
            currentPlayer = player1; //currentplayer becomes player1
            console.log(turn++)
            $('#p1').addClass("bg-light border border-info");
            $('#p2').removeClass("bg-light border border-info");
            }
        }
    })
};


// event listener

document.getElementById('startBtn').addEventListener('click', () => startGame()); //click start game button, gets id of button and adds an event listener for the click, and then calls the function startGame

document.getElementById("resetBtn").addEventListener('click', () => document.location.reload(true)); //reset button click and reset / reload of page