const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(answer);

let attemtps = 0;
let guess;
let running = true;

const labelText = document.querySelector(".label");
const input = document.getElementById("number-input");
const button = document.querySelector(".button");

labelText.textContent = `Enter a number between ${min} - ${max}!`;

const guessNumber = () => {
  guess = input.value;
  if (!guess) {
    labelText.textContent = "Input is empty!";
    input.style.backgroundColor = "red";
  } else if (guess > answer) {
    labelText.textContent = "Too high! Go lower!";
    attemtps++;
    input.style.backgroundColor = "red";
  } else if (guess < answer) {
    labelText.textContent = "Too low! Go higher!";
    input.style.backgroundColor = "red";
    attemtps++;
  } else {
    attemtps++;
    labelText.textContent = `You got it! It was ${answer}! It took you ${attemtps} attempts!`;
    input.style.backgroundColor = "green";
  }
};

button.addEventListener("click", guessNumber);
button.addEventListener("keydown", guessNumber);
