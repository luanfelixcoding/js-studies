/* 
Exercise 2: Dynamic Greeting with Arrow Functions
Instructions:
- Declare a variable userName and assign it a string (e.g., "Alice").
- Create an arrow function called createGreeting that takes one parameter (name).
- Inside createGreeting, return a string like: "Hello, [name]! Welcome to the JavaScript world."
- Call createGreeting with your userName and store the returned greeting in a variable.
- console.log() the greeting.
*/

const userName = "Github";

const createGreeting = (name) =>
  `Hello, ${name}! Welcome to the JavaScript world.`;

const greetings = createGreeting(userName);
console.log(greetings);
