// Q1 Print numbers 1 to 10
console.log("Q.01");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Q2 Sum of first N numbers
console.log("Q.02");
let sumN;
let count = 1;
let total = 0;

sumN = 3; // input

while (count <= sumN) {
  total += count;
  count++;
}
console.log(total);

// Multiplication table
console.log("Q.03");
let multiplicationN;

multiplicationN = 5; // input

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationN} * ${i} = ${multiplicationN * i}`);
}

// Factorial calculation
console.log("Q.04");

let factorN;
let factor;
let result = 1;

factorN = 4; // input

factor = factorN - 1;
while (factor >= 1) {
  factorN *= factor;
  result = factorN;
  factor--;
}
console.log(result);

// Reverse counting
console.log("Q.05");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Even numbers upto N
console.log("Q.06");
let eN;
let evenN = 0;

eN = 20; // input

do {
  console.log(evenN);
  evenN += 2;
} while (evenN <= eN);

// Sum of digits
console.log("Q.07");
let sumDigitN;
let totalSum = 0;

sumDigitN = 1234; // input

while (sumDigitN > 0) {
  totalSum += sumDigitN % 10;
  sumDigitN = Math.floor(sumDigitN / 10);
}
console.log(totalSum);

// Fibonacci series
console.log("Q.08");
let N1 = 0;
let N2 = 1;
let fibSum;
for (let i = 0; i < 10; i++) {
  console.log(N1);
  fibSum = N1 + N2;
  N1 = N2;
  N2 = fibSum;
}

// Guessing game
console.log("Q.09");
let guess;
let ans = 4;
do {
  // guess = Number(window.prompt(`guess a number`)); asking user input
  guess = 4; // only for node demo
} while (guess !== ans);
console.log(`Correct!`);

// Prime number checker
console.log("Q.10");
let isPrime = true;
let numP;

numP = 97; // input

if (numP <= 1) {
  isPrime = false;
}
for (let i = 2; i < numP; i++) {
  if (numP % i === 0) {
    isPrime = false;
  }
}
if (isPrime) {
  console.log(`Prime number`);
} else {
  console.log(`Not a prime`);
}
