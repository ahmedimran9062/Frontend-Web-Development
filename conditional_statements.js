// Q1 Program to check if a Number is positive, negative or zero.
console.log("Q.01");
let num1;
num1 = 4;
if (num1 > 0) {
  console.log(`${num1} is a positive number.`);
} else if (num1 < 0) {
  console.log(`${num1} is a negative number.`);
} else {
  console.log(`Input number is zero`);
}

// Even or Odd checker
console.log("Q.02");
let num2;
num2 = 3;
if (!Number.isInteger(num2)) {
  console.log(
    `${num2} is not an integer, therefore cannot be evaluated as even or odd`,
  );
} else if (num2 % 2 == 0) {
  console.log(`${num2} is an even number`);
} else {
  console.log(`${num2} is an odd number`);
}

// Largest of two numbers
console.log("Q.03");
let num3 = 144;
let num4 = 67;
if (num3 > num4) {
  console.log(num3);
} else if (num3 < num4) {
  console.log(num4);
} else if (num3 == num4) {
  console.log(`${num3} is equals to ${num4}`);
} else {
  console.log("Both inputs must be numbers");
}

// Grade evaluation based on score
console.log("Q.04");
let studentScore;
studentScore = 75;
if (studentScore > 100) {
  console.log("Score cannot exceed 100");
} else if (studentScore >= 90) {
  console.log("A-Grade");
} else if (studentScore >= 80) {
  console.log("B-Grade");
} else if (studentScore >= 70) {
  console.log("C-Grade");
} else if (studentScore >= 60) {
  console.log("D-Grade");
} else if (studentScore < 60) {
  console.log("F-Grade");
} else {
  console.log("Not a valid score");
}

// Leap year check
console.log("Q.05");
let currentYear;

currentYear = 2026;

if (currentYear % 4 === 0 && currentYear % 100 !== 0) {
  console.log("Leap year");
} else if (
  currentYear % 4 === 0 &&
  currentYear % 100 === 0 &&
  currentYear % 400 === 0
) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Day of week switch
console.log("Q.06");
let dayNum;
let dayName;

dayNum = 5;

switch (dayNum) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Not a valid day of the week";
}
console.log(dayName);

// Calculator Switch
console.log("Q.07");
let x;
let y;
let opSign;
let result;

x = 10;
y = 5;
opSign = "+"; // "+" "-" "*" "/"

switch (opSign) {
  case "+":
    result = x + y;
    break;
  case "-":
    result = x - y;
    break;
  case "*":
    result = x * y;
    break;
  case "/":
    result = x / y;
    break;
  default:
    result = "error";
}
console.log(result);

// Vowel or consonant
console.log("Q.08");
let char;

char = "a";

char = char.toLowerCase();
if (char >= "a" && char <= "z") {
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("vowel");
      break;
    default:
      console.log("Consonant");
  }
} else {
  console.log("Not an alphabetical character");
}

//Traffic light system
console.log("Q.09");
let trafficLight;
let instr;

trafficLight = "Green"; //"Red" "Yellow" "Green"

switch (trafficLight) {
  case "Red":
    instr = "Stop!";
    break;
  case "Yellow":
    instr = "Wait!";
    break;
  case "Green":
    instr = "Go!";
    break;
  default:
    instr = "Not a valid traffic light colour";
}
console.log(instr);

// Menu-driven program
console.log("Q.10");
const menu = ["Check Balance", "Deposit", "Withdraw", "Exit"];
let input;
let output;
let balance;
let deposit;
let withdraw;

balance = 5000;

deposit = 500;
withdraw = 750;
input = 3;

switch (input) {
  case 1:
    output = `Balance: ${balance}`;
    break;
  case 2:
    output = `Deposit: ${deposit}. Updated balance: ${balance + deposit}`;
    break;
  case 3:
    if (withdraw > balance) {
      output = "Insufficient funds";
    } else {
      output = `Withdraw: ${withdraw}. Updated balance: ${balance - withdraw} `;
    }
    break;
  case 4:
    output = menu[3];
    break;
  default:
    output = `Not a valid input`;
}
console.log(output);
