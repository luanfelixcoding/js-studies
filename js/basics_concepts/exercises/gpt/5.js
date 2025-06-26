/* 
Given an array of names, filter only names with less than 5 letters.
*/

const names = ["Ana", "John", "Carlos", "Eva", "Lucas"];

const shortNames = names.filter((name) => name.length < 5);
console.log(shortNames); // ['Ana', 'John', 'Eva']
