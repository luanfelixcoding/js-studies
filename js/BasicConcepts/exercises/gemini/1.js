/* 
Exercise 1: Simple Calculator
Instructions:

- Declare two variables, num1 and num2, and assign them any numbers.
- Create a traditional function called add that takes two parameters and returns their sum.
- Create a traditional function called subtract that takes two parameters and returns their difference.
- Call both add and subtract functions with num1 and num2.
- Store the results in new variables (e.g., sumResult, differenceResult).
- Use console.log() to display the original numbers and the results of both operations.
*/

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let num = 15;
let num2 = 10;

const sumResult = add(num, num2);
const differenceResult = subtract(num, num2);

console.log(sumResult); // 25
console.log(differenceResult); // 5
