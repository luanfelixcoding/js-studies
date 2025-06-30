/* 
Exercise 4: Filtering Names by Initial Letter
Instructions:

- Declare an array named names containing at least 5-7 string names (e.g., c).
- Declare a variable startLetter and assign it a character (e.g., 'A').
- Use the filter() method on the names array. This time, use an arrow function directly as the callback.
- The arrow function should check if each name starts with the startLetter (case-insensitive).
- Store the result in a variable called filteredNames.
- console.log() the original names array, the startLetter, and the filteredNames array.
*/

const names = ["Anna", "Bob", "Alice", "Charlie", "Adam", "David"];

let startLetter = "A";

const filteredNames = [];

const namesSliced = names.filter((name) => {
  if (name.startsWith(startLetter)) filteredNames.push(name);
});

console.log(filteredNames);
