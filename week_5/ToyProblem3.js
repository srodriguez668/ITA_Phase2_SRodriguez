const boardSolution = 
    [
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'X'],
        ['O', 'O', 'O', 'X', 'O'],
        ['O', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O']
    ];

const currentBoard =
    [
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-']
    ];

let gameOn = true;
let xHit = 0

function showBoard() {
    console.log(
        `${currentBoard[0]}`,
        `\n ${currentBoard[1]}`,
        `\n ${currentBoard[2]}`,
        `\n ${currentBoard[3]}`,
        `\n ${currentBoard[4]}`,
    )
}

function getInput() {
    let row = window.prompt("Please enter a number for the row 1-5:")
    while (/^[1-5]{1}$/.test(row) === false) {
        row = window.prompt("Try again, and please enter a number for the row 1-5:")
    };

    let column = window.prompt("Please enter a number for the column 1-5:")
    while (/^[1-5]{1}$/.test(column) === false) {
        column = window.prompt("Try again, and please enter a number for the column 1-5:")
    };

    return [parseInt(row) - 1, parseInt(column) - 1];
}

function boardManipulation(row, column, tick) {
    boardSolution[row].splice(column, 1, "-");
    currentBoard[row].splice(column, 1, tick);
}

function checkLocation(row, column) {
    let hit = boardSolution[row][column];

    if (hit[0] === "-") {
        console.log("You already hit that location");
    } else if (hit[0] === "X") {
        xHit++;
        boardManipulation(row, column, "X")
        console.log("You hit the ship!");
        showBoard();
    } else {
        boardManipulation(row, column, "O")
        console.log("That sadly was a miss");
        showBoard();
    }
}

console.log("Welcome to mini battle ship where the goal is to sink the ship!")
console.log("To play just select the row and column on the following board you wish to hit, once you sink the ship you win!:")
console.log(
    "      column",
    "\n    _________",
    "\n   |1 2 3 4 5",
    "\n r |2 O O O O",
    "\n o |3 O O O O",
    "\n w |4 O O O O",
    "\n   |5 O O O O"
)

while (gameOn) {
    let inputs = getInput()
    checkLocation(inputs[0], inputs[1])
    xHit === 4 ? gameOn = false : gameOn = true
}

console.log("You sunk the ship, congrats on winning the game!")

//extra credit to do verificationc 