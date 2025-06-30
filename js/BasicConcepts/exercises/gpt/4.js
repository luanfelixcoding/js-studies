/*
Create an array with the numbers from 1 to 10.
Use the filter() function to create a new array with only even numbers.
Print the result.
 */

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = array.filter((number) => number % 2 === 0);

const evenArrow = (numbers) => numbers.filter((number) => number % 2 === 0);

const evenArrow2 = (numbers) => {
  const result = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      result.push(number);
    }
  });
  return result;
};

console.log("array:", even); // [2, 4, 6, 8, 10]
console.log("array:", evenArrow(array)); // [2, 4, 6, 8, 10]
console.log("array:", evenArrow2(array)); // [2, 4, 6, 8, 10]
