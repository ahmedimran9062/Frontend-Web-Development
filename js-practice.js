// ================================================================
//  THE JAVASCRIPT EXERCISE
//  Variables, strings, conditionals, loops, functions,
//  arrays, objects, map/filter/find/reduce/sort, chaining
// ================================================================
//
//  HOW TO DO THIS EXERCISE
//  1. Blank file for your answers. Copy the DATA block below to the
//     top of it. Write each answer under its question number.
//  2. Read the question, then struggle for 10 minutes before
//     looking anything up. Googling a method is allowed. Looking at
//     your old code is not.
//  3. For function questions: write the function, then paste the
//     solution lines under it and check your output against the
//     "expected" comment next to each one.
//  4. Mark each question as you go:
//        [1] got it first try   [2] got it after looking something up
//        [3] could not do it
//  5. When you finish, count your [3]s per section. Those sections are
//     what to redo tomorrow, from a blank file.
//
//  Questions inside each section go from easy to hard.
//  "Toolbox" lines tell you which methods you may need, so you are
//  never expected to guess a method name out of thin air.
// ================================================================

// ------------------------- DATA (copy this) -------------------------
const nums = [1, 2, 3, 4, 5, 6];
const mixed = [10, 2, 33, 4, 15];
const names = ["Ali", "Sara", "Omar", "Hina"];

const users = [
  { name: "Ali", age: 17, active: true },
  { name: "Sara", age: 25, active: false },
  { name: "Omar", age: 31, active: true },
  { name: "Hina", age: 22, active: true },
];

const products = [
  { id: 1, name: "Pen", price: 2, stock: 100, category: "stationery" },
  { id: 2, name: "Notebook", price: 5, stock: 0, category: "stationery" },
  { id: 3, name: "Backpack", price: 40, stock: 12, category: "bags" },
  { id: 4, name: "Lunchbox", price: 15, stock: 7, category: "bags" },
  { id: 5, name: "Marker", price: 3, stock: 50, category: "stationery" },
];

const student = {
  name: "Zain",
  age: 20,
  scores: { math: 80, english: 65, science: 90 },
  hobbies: ["chess", "cricket"],
};
// --------------------------------------------------------------------

// ================================================================
//  SECTION 1: VARIABLES, TYPES, OPERATORS
//  (just use console.log, no functions needed)
// ================================================================

// 1.1 [easy]
// Create const language = "JavaScript" and let year = 2026.
// Print one sentence using a template literal.
// Expected output:
//   I am learning JavaScript in 2026

// 1.2 [easy]
// Print the typeof each of these, one console.log per line:
//   42, "42", true, undefined, null, [], {}
// Expected output (one per line):
//   number
//   string
//   boolean
//   undefined
//   object
//   object
//   object

// 1.3 [easy]
// Print each result on its own line:
//   17 % 5     2 ** 3     10 / 4     "5" + 3     "5" - 3
// Expected output:
//   2
//   8
//   2.5
//   53
//   2

// 1.4 [medium]
// Print each of these on its own line:
//   5 == "5"     5 === "5"     0 || "default"     "Ali" || "default"
// Expected output:
//   true
//   false
//   default
//   Ali

// 1.5 [medium]
// const price = 250; const discount = 20; (discount is a percent)
// Work out the final price after discount and print it with a
// template literal.
// Expected output:
//   Final price: 200

// ================================================================
//  SECTION 2: STRINGS
//  Toolbox: length, toUpperCase, toLowerCase, slice, replace,
//           replaceAll, includes, indexOf, str[0]
// ================================================================
const word = "JavaScript";

// 2.1 [easy]
// Print the length of word.
// Expected: 10

// 2.2 [easy]
// Print word in all capitals, then in all lowercase.
// Expected:
//   JAVASCRIPT
//   javascript

// 2.3 [easy]
// Print the first 4 letters of word, then everything from index 4 on.
// Expected:
//   Java
//   Script

// 2.4 [medium]
// const msg = "I like cats. cats are cute.";
// Use replace to change "cats" to "dogs" and print the result.
// Expected: I like dogs. cats are cute.
// (Notice it only replaced the FIRST match.)
// Then do the same with replaceAll.
// Expected: I like dogs. dogs are cute.

// 2.5 [medium]
// Print whether word contains "Script", then the index of "S" in word.
// Expected:
//   true
//   4

// 2.6 [hard]
// Write capitalize(str): first letter capital, the rest lowercase.
// Tests:
//   console.log(capitalize("jAVAscript"));   // Javascript
//   console.log(capitalize("ali"));          // Ali

// ================================================================
//  SECTION 3: CONDITIONALS (if / else if / switch)
//  Every question here is a function that RETURNS its answer.
// ================================================================

// 3.1 [easy]
// isEven(n) returns true if n is even, otherwise false.
// Tests:
//   console.log(isEven(4));   // true
//   console.log(isEven(7));   // false
//   console.log(isEven(0));   // true

// 3.2 [easy]
// checkAge(age) returns "child" if under 13, "teen" if 13 to 17,
// and "adult" if 18 or more.
// Tests:
//   console.log(checkAge(8));    // child
//   console.log(checkAge(12));   // child
//   console.log(checkAge(13));   // teen
//   console.log(checkAge(17));   // teen
//   console.log(checkAge(18));   // adult
//   console.log(checkAge(40));   // adult

// 3.3 [medium]
// gradeFor(score) returns "A" for 90 and above, "B" for 80 to 89,
// "C" for 70 to 79, and "F" for anything below 70.
// Tests:
//   console.log(gradeFor(95));    // A
//   console.log(gradeFor(85));    // B
//   console.log(gradeFor(70));    // C
//   console.log(gradeFor(69));    // F
//   console.log(gradeFor(100));   // A

// 3.4 [medium]
// dayType(day) uses a SWITCH statement.
// "sat" or "sun" returns "weekend".
// "mon", "tue", "wed", "thu", "fri" returns "weekday".
// Anything else returns "invalid".
// Tests:
//   console.log(dayType("sat"));   // weekend
//   console.log(dayType("tue"));   // weekday
//   console.log(dayType("xyz"));   // invalid

// 3.5 [hard]
// canEnter(age, hasTicket, isVIP): a VIP can always enter.
// Everyone else needs a ticket AND must be 18 or older.
// Tests:
//   console.log(canEnter(20, true, false));    // true
//   console.log(canEnter(20, false, false));   // false
//   console.log(canEnter(16, true, false));    // false
//   console.log(canEnter(16, false, true));    // true

// 3.6 [hard]
// fizzBuzz(n): return "FizzBuzz" if n divides by both 3 and 5,
// "Fizz" if it divides by 3 only, "Buzz" if by 5 only,
// otherwise return n itself.
// Tests:
//   console.log(fizzBuzz(15));   // FizzBuzz
//   console.log(fizzBuzz(9));    // Fizz
//   console.log(fizzBuzz(10));   // Buzz
//   console.log(fizzBuzz(7));    // 7

// ================================================================
//  SECTION 4: LOOPS
//  Toolbox: for, for of, for in, while, do while
//  No map/filter/reduce in this section. Loops only.
// ================================================================

// 4.1 [easy]
// With a for loop, print the numbers 1 to 5, one per line.
// Expected:
//   1
//   2
//   3
//   4
//   5

// 4.2 [easy]
// With for of, print every item of names, one per line.
// Expected:
//   Ali
//   Sara
//   Omar
//   Hina

// 4.3 [easy]
// sumTo(n) returns 1 + 2 + ... + n, using a loop.
// Tests:
//   console.log(sumTo(5));     // 15
//   console.log(sumTo(100));   // 5050

// 4.4 [medium]
// countdown(n) uses a WHILE loop. It prints n, n-1, ... down to 1,
// then prints "Liftoff!"
// Test:  countdown(3);
// Expected:
//   3
//   2
//   1
//   Liftoff!

// 4.5 [medium]
// countEvens(arr) returns how many even numbers are in arr.
// Tests:
//   console.log(countEvens(nums));        // 3
//   console.log(countEvens([1, 3, 5]));   // 0

// 4.6 [medium]
// largest(arr) returns the biggest number. Use a loop. No Math.max.
// Tests:
//   console.log(largest(mixed));           // 33
//   console.log(largest([-5, -2, -9]));    // -2

// 4.7 [medium]
// With a FOR IN loop, print each subject and score of
// student.scores in this format.
// Expected:
//   math: 80
//   english: 65
//   science: 90

// 4.8 [medium]
// countVowels(str) returns how many vowels (a e i o u) are in str,
// upper or lower case.
// Tests:
//   console.log(countVowels("Education"));   // 5
//   console.log(countVowels("rhythm"));      // 0

// 4.9 [hard]
// reverseString(str) returns the string backwards. Use a loop.
// Tests:
//   console.log(reverseString("hello"));   // olleh

// 4.10 [hard]
// isPalindrome(str) returns true if str reads the same backwards.
// Use your reverseString from 4.9.
// Tests:
//   console.log(isPalindrome("level"));   // true
//   console.log(isPalindrome("hello"));   // false

// 4.11 [hard]
// Using NESTED loops, print this triangle (rows 1 to 4).
// Expected:
//   1
//   12
//   123
//   1234
// Hint: build each row as a string, then print it once per row.

// ================================================================
//  SECTION 5: FUNCTIONS
// ================================================================

// 5.1 [easy]
// Write the same function three ways, each taking a and b and
// returning a + b:
//   addRegular (normal declaration)
//   addExpression (function expression stored in a const)
//   addArrow (arrow function)
// Tests:
//   console.log(addRegular(3, 4));      // 7
//   console.log(addExpression(3, 4));   // 7
//   console.log(addArrow(3, 4));        // 7

// 5.2 [medium]
// Write double(n) that RETURNS n * 2.
// Write printDouble(n) that PRINTS n * 2 and returns nothing.
// Then run:
//   const x = printDouble(4);
//   console.log(x);
//   console.log(double(4));
// Expected output:
//   8
//   undefined
//   8

// 5.3 [hard]
// calculate(a, b, op) where op is "+", "-", "*" or "/".
//   If a or b is not a number, return "Numbers only".
//   If op is "/" and b is 0, return "Cannot divide by zero".
//   If op is not one of the four, return "Invalid operator".
// Tests:
//   console.log(calculate(6, 3, "+"));    // 9
//   console.log(calculate(6, 3, "/"));    // 2
//   console.log(calculate(6, 0, "/"));    // Cannot divide by zero
//   console.log(calculate(6, 3, "%"));    // Invalid operator
//   console.log(calculate("6", 3, "+"));  // Numbers only

// 5.4 [hard]
// applyTwice(fn, value) calls fn on value, then calls fn again on
// the result, and returns that. (fn is a function you pass in.)
// Tests:
//   console.log(applyTwice((n) => n * 2, 5));      // 20
//   console.log(applyTwice((s) => s + "!", "Hi"));  // Hi!!

// ================================================================
//  SECTION 6: ARRAYS (the basics)
//  Toolbox: [index], length, push, pop, shift, unshift, includes,
//           indexOf, spread [...arr]
// ================================================================

// 6.1 [easy]
// Print the first item of names, the last item, and its length.
// Expected:
//   Ali
//   Hina
//   4

// 6.2 [easy]
// const fruits = ["apple", "banana"];
// push "mango" onto the end, put "kiwi" at the front, print fruits.
// Expected:
//   [ 'kiwi', 'apple', 'banana', 'mango' ]

// 6.3 [medium]
// const list = [10, 20, 30, 40];
// Remove the last item and print it, remove the first item and
// print it, then print what's left in list.
// Expected:
//   40
//   10
//   [ 20, 30 ]

// 6.4 [medium]
// Print whether names includes "Omar", then the index of "Hina",
// then the index of "Zed".
// Expected:
//   true
//   3
//   -1

// 6.5 [hard]
// removeDuplicates(arr) returns a new array with repeats removed.
// Use a loop and includes. No Set.
// Test:
//   console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
// Expected: [ 1, 2, 3, 4 ]

// 6.6 [hard]
// mergeArrays(a, b) returns a NEW array with all of a, then all of b.
// Use spread. The originals must not change.
// Test:
//   const m1 = [1, 2];
//   const m2 = [3, 4];
//   console.log(mergeArrays(m1, m2));
//   console.log(m1, m2);
// Expected:
//   [ 1, 2, 3, 4 ]
//   [ 1, 2 ] [ 3, 4 ]

// ================================================================
//  SECTION 7: OBJECTS
//  Toolbox: dot access, [key] access, delete, Object.values,
//           Object.keys, spread { ...obj }, this
// ================================================================

// 7.1 [easy]
// Print student.name, then student["age"].
// Expected:
//   Zain
//   20

// 7.2 [easy]
// Print student's science score, then student's second hobby.
// Expected:
//   90
//   cricket

// 7.3 [medium]
// const car = { brand: "Toyota", year: 2015 };
// Change year to 2020, add color: "white", delete brand.
// Then print car.
// Expected:
//   { year: 2020, color: 'white' }

// 7.4 [medium]
// averageScore(scores) takes a scores object and returns the average
// rounded to the nearest whole number. (Math.round does the rounding.)
// Test:
//   console.log(averageScore(student.scores));   // 78

// 7.5 [medium]
// hasProperty(obj, key) returns true if obj has that key, else false.
// Test:
//   const phone = { brand: "Nokia", price: 100 };
//   console.log(hasProperty(phone, "price"));   // true
//   console.log(hasProperty(phone, "color"));   // false

// 7.6 [hard]
// updateAge(person, newAge) returns a NEW object, a copy of person
// with age set to newAge. The original object must not change.
// Test:
//   const ali = { name: "Ali", age: 17 };
//   console.log(updateAge(ali, 18));
//   console.log(ali);
// Expected:
//   { name: 'Ali', age: 18 }
//   { name: 'Ali', age: 17 }

// 7.7 [hard]
// Make an object person with name: "Zain", age: 20 and a METHOD
// called introduce that RETURNS a sentence using this.
// Test:
//   console.log(person.introduce());
// Expected: Hi, I'm Zain and I'm 20

// ================================================================
//  SECTION 8: ARRAYS OF OBJECTS (map, filter, find)
//  Use the products array.
// ================================================================

// 8.1 [easy]
// map: print an array of just the product names.
// Expected:
//   [ 'Pen', 'Notebook', 'Backpack', 'Lunchbox', 'Marker' ]

// 8.2 [easy]
// map: make an array of strings like "Pen costs $2" and print it.
// Expected (node may print it across several lines, that's fine):
//   'Pen costs $2', 'Notebook costs $5', 'Backpack costs $40',
//   'Lunchbox costs $15', 'Marker costs $3'

// 8.3 [easy]
// filter: print HOW MANY products cost less than 10.
// Expected: 3

// 8.4 [medium]
// addShipping(arr) returns a new array of products where each
// price is $1 higher. Use map with spread, so the originals do not
// change. Then print the prices of the new array and the prices of
// the original products.
// Expected:
//   [ 3, 6, 41, 16, 4 ]
//   [ 2, 5, 40, 15, 3 ]

// 8.5 [medium]
// find: print the NAME of the product with id 3.
// Then print the result of searching for id 99.
// Expected:
//   Backpack
//   undefined

// 8.6 [medium]
// getPrice(arr, name) returns the price of the product with that
// name, or the string "Not found" if there isn't one.
// Tests:
//   console.log(getPrice(products, "Marker"));   // 3
//   console.log(getPrice(products, "Table"));    // Not found

// 8.7 [medium]
// filter then map: print the names of products in the "bags" category.
// Expected:
//   [ 'Backpack', 'Lunchbox' ]

// 8.8 [hard]
// firstOutOfStock(arr) returns the NAME of the first product whose
// stock is 0, or "None" if there isn't one.
// Tests:
//   console.log(firstOutOfStock(products));                  // Notebook
//   console.log(firstOutOfStock([{ name: "A", stock: 3 }])); // None

// 8.9 [hard]
// cheapInStock(arr, maxPrice) returns an array of NAMES of products
// that are in stock (stock above 0) AND cost maxPrice or less.
// Tests:
//   console.log(cheapInStock(products, 15));  // [ 'Pen', 'Lunchbox', 'Marker' ]
//   console.log(cheapInStock(products, 3));   // [ 'Pen', 'Marker' ]

// ================================================================
//  SECTION 9: REDUCE
//  Use reduce for every question here (no loops).
// ================================================================

// 9.1 [easy]
// Sum of nums. Expected: 21

// 9.2 [easy]
// Product of nums (1 * 2 * 3 * 4 * 5 * 6). Expected: 720
// Careful: what should the starting value be?

// 9.3 [easy]
// Total stock across all products. Expected: 169

// 9.4 [medium]
// The highest price among products. Expected: 40

// 9.5 [medium]
// How many products are in stock (stock above 0)? Expected: 4

// 9.6 [medium]
// Total inventory value: add up price * stock for every product.
// Expected: 935

// 9.7 [hard]
// longestWord(words) returns the longest string in an array.
// Test:
//   console.log(longestWord(["kiwi", "banana", "apple", "watermelon", "fig"]));
// Expected: watermelon

// 9.8 [hard]
// countByCategory(arr) returns an OBJECT counting products per category.
// Start the accumulator as {} and think about what || does with
// undefined.
// Test:
//   console.log(countByCategory(products));
// Expected: { stationery: 3, bags: 2 }

// ================================================================
//  SECTION 10: SORT
//  Remember: sort changes the original array, so copy first.
//  Toolbox: [...arr], a - b, b - a, localeCompare, slice
// ================================================================

// 10.1 [easy]
// Print nums sorted biggest first, then print nums again to prove
// the original did not change.
// Expected:
//   [ 6, 5, 4, 3, 2, 1 ]
//   [ 1, 2, 3, 4, 5, 6 ]

// 10.2 [easy]
// Print mixed sorted smallest first (without changing mixed).
// Expected: [ 2, 4, 10, 15, 33 ]

// 10.3 [medium]
// Print the NAMES of products sorted cheapest first.
// Expected: [ 'Pen', 'Marker', 'Notebook', 'Lunchbox', 'Backpack' ]

// 10.4 [medium]
// Print names sorted Z to A.
// Expected: [ 'Sara', 'Omar', 'Hina', 'Ali' ]

// 10.5 [medium]
// secondLargest(arr) returns the second biggest number using sort.
// Tests:
//   console.log(secondLargest(mixed));    // 15
//   console.log(secondLargest([1, 2]));   // 1

// 10.6 [medium]
// Print the NAMES of products, most stock first.
// Expected: [ 'Pen', 'Marker', 'Backpack', 'Lunchbox', 'Notebook' ]

// 10.7 [hard]
// top3Expensive(arr) returns the names of the 3 most expensive
// products that are IN STOCK, most expensive first.
// Toolbox: filter, sort, slice(0, 3), map
// Test:
//   console.log(top3Expensive(products));
// Expected: [ 'Backpack', 'Lunchbox', 'Marker' ]

// 10.8 [boss]
// Print the NAMES of products sorted by category A to Z, and
// within the same category by price, highest first.
// Hint: when two categories are the same, localeCompare returns 0.
// What does || do with 0?
// Expected: [ 'Backpack', 'Lunchbox', 'Notebook', 'Marker', 'Pen' ]

// ================================================================
//  SECTION 11: MIXED CHAINING (boss round)
//  Everything together. Write each one as a chain where it makes sense.
// ================================================================

// 11.1 [medium]
// Total of the prices of products that are in stock.
// (Just the prices added up, not multiplied by stock.)
// Expected: 60

// 11.2 [medium]
// Names of users who are active AND 18 or older, sorted A to Z.
// Expected: [ 'Hina', 'Omar' ]

// 11.3 [medium]
// Average age of users who are active AND 18 or older.
// Expected: 26.5

// 11.4 [hard]
// Build and print this sentence from the data (stationery only):
// Expected: Stationery items: Pen, Notebook, Marker
// Toolbox: join(", ")

// 11.5 [hard]
// summary(arr) returns an object describing the products array.
// Test:
//   console.log(summary(products));
// Expected:
//   { total: 5, inStock: 4, outOfStock: 1, totalValue: 935 }

// 11.6 [hard]
// Print a "receipt" of the in-stock products, most expensive first,
// one product per line, in this format.
// Expected:
//   Backpack - $40
//   Lunchbox - $15
//   Marker - $3
//   Pen - $2
// Toolbox: map, join("\n")

// 11.7 [boss]
// wordFrequency(sentence) returns an object counting each word.
// Toolbox: split(" "), reduce (or a for of loop)
// Test:
//   console.log(wordFrequency("the cat and the dog and the bird"));
// Expected: { the: 3, cat: 1, and: 2, dog: 1, bird: 1 }

// ================================================================
//  SECTION 12: PREDICT THE OUTPUT
//  No expected output given here on purpose.
//  For each snippet: write what you think it prints in a comment
//  (// my guess: ...). THEN remove the comment markers, run it,
//  and compare. The answer key explains every one.
// ================================================================

// P1
// console.log([10, 2, 33, 4, 15].sort());

// P2
// {
//   const a = [1, 2, 3];
//   const b = a;
//   b.push(4);
//   console.log(a);
// }

// P3
// {
//   const original = { name: "Zain", scores: { math: 80 } };
//   const shallow = { ...original };
//   const deep = structuredClone(original);
//   shallow.scores.math = 0;
//   console.log(original.scores.math, deep.scores.math);
// }

// P4
// {
//   function f(x) {
//     x * 2;
//   }
//   console.log(f(5));
// }

// P5
// console.log(nums.map((n) => n * 2).filter((n) => n > 6));

// P6
// console.log("5" + 3 - 1);

// P7
// console.log(0 || "a", "b" || "c", null || undefined);

// P8
// {
//   let i = 10;
//   do {
//     console.log(i);
//     i++;
//   } while (i < 10);
// }

// P9
// {
//   const nums2 = [3, 1, 2];
//   const sorted = nums2.sort((a, b) => a - b);
//   console.log(nums2, sorted);
// }

// P10
// console.log(
//   [1, 2, 3].find((n) => n > 5),
//   [1, 2, 3].filter((n) => n > 5)
// );

// P11
// console.log(users.find((u) => u.age > 100) || "nobody");

// P12
// {
//   const r = [1, 2, 3].reduce((acc, n) => {
//     acc + n;
//   }, 0);
//   console.log(r);
// }

// ================================================================
//  END. Count your [3]s per section and redo those tomorrow, cold.
// ================================================================
