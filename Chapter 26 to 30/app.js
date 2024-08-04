// Question # 1:
// Question # 2:
function calculate() {
	var numbers = parseFloat(document.getElementById('numberInput').value);
	var roundOff = Math.round(numbers);
	var firstValue = Math.floor(numbers);
	var secondValue = Math.ceil(numbers);
	var result = document.getElementById('results');
	result.innerHTML = `
		<p>Number: ${numbers}</p>
		<p>Round off value: ${roundOff}</p>
		<p>first value: ${firstValue}</p>
		<p>second value: ${secondValue}</p>
	`;
}


// // Question # 3:
var digit = -4;
 var absoluteValue = digit < 0 ? -digit : digit;
 document.getElementById('absolute-value').innerText = "The absolute value of " + digit + " is " + absoluteValue;

// Question # 4:
var diceValue = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice-result").textContent = "Random Dice Value: " + diceValue;


// Question # 5:
var coinFlip = Math.random();
var coinValue = "Heads";
if (coinFlip < 0.5) {
    coinValue = "Tails";
}
document.getElementById("coin-result").textContent = "Random Coin Value: " + coinValue ;


// Question # 6:
var randomNo = Math.random();
randomNo = randomNo * 100;
randomNo = Math.floor(randomNo);
randomNo = randomNo + 1;
document.write("Random number between 1 and 100: " + randomNo + "<br>");


// Question # 7:
function getWeight() {
	var weight = prompt("Enter your weight in kilograms:");
	return weight;
  }
  function displayWeight(weight) {
	document.write("The weight of the user is " + weight + " kilograms.");
  }
  var weight = getWeight();
  displayWeight(weight);


// Question # 8:
var secretNo = Math.floor(Math.random() * 10) + 1;
var usersInput = prompt("Enter a number between 1 and 10");
usersInput = parseInt(usersInput);
if (isNaN(usersInput) || usersInput < 1 || usersInput > 10) {
  alert("Invalid input. Please enter a number between 1 and 10.");
} else if (usersInput === secretNo) {
  alert("Congratulations! You guessed the correct number.");
} else {
  alert("Try again!"); 
}