//GENERATE A RANDOM NUMBER FROM 1 TO 6 BOTH FOR THE PLAYER AND THE COMPUTER + PRINT THE RESULT

// - GIVEN
// 1. Number included in the dice
const diceNumbers = [1, 2, 3, 4, 5, 6];
console.log(diceNumbers);

let userNumber = Math.floor(Math.random() * (1, 6) + 1);
    console.log("Hey user, that's your number",userNumber);

let pcNumber = Math.floor(Math.random() * (1, 6) + 1);
console.log("This is pc's number" ,pcNumber);

// - ELABORATION
// 2. Calculate who has the higher number between the player and the PC
let winningNumber = false
    const randomNumbers = diceNumbers;
    if (userNumber < pcNumber) {
        winningNumber = true;
    } else if (userNumber > pcNumber) {
        winningNumber = true;
    }
console.log(winningNumber);

// - OUTPUT
// 3. Print the result
if (userNumber < pcNumber) {
    winningNumber = alert("PC won this round!"), true;
} else if (userNumber > pcNumber) {
    winningNumber = alert("User won this round!"), true;
} else (alert("It's a draw!"))