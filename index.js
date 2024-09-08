// NUMMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`)
    guess = Number(guess)
    if(isNaN(guess)){
        window.alert("Write a valid Number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Write a valid Number");
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("Number is too low");
        }
        else if(guess > answer){
            window.alert("Number is too High");
        }
        else {
            window.alert(`Correct answer! You guessed it in ${attempts} attempts.`);
            running = false;
        }
    }
}
