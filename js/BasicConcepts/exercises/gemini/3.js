/* 
Exercise 3: Filtering Even Numbers from an Array
Instructions:

- Declare an array named numbers containing at least 5-7 mixed positive and negative integers (e.g., [1, 2, -3, 4, 5, -6, 7, 8]).
- Create a traditional function called isEven that takes a single number as a parameter and returns true if the number is even, and false otherwise. (Hint: Use the modulo operator %).
- Use the filter() method on the numbers array, passing isEven as the callback function.
- Store the result (the new array of even numbers) in a variable called evenNumbers.
- console.log() the original numbers array and the evenNumbers array.
*/

numbers = [1, 2, -3, 4, 5, -6, 7, 8];

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

evenNumbers = numbers.filter((number) => isEven(number));
console.log(numbers);
console.log(evenNumbers);
