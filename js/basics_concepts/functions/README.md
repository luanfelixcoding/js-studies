# Functions in JavaScript

---

## Normal Functions

Traditional functions in JavaScript are defined using the `function` keyword.

#### Normal Function Structure

```
function name_of_the_function(parameters, ...){
    // implementation of the function
}

name_of_the_function() // calling the function
```

#### Function Expression -> When a function is attributed to a variable

```
const sayGoodbye = function(name) {
  return `Goodbye, ${name}.`;
};

console.log(sayGoodbye("Github")); // "Goodbye, Github."
```

---

## Arrow Functions

They are often preferred for short, one-line functions, or used in **callback (when a function is called inside a function)** functions.

#### Arrow Function Structure

```
const name_of_the_variable = (parameters, ...) => what_the_function_will_return;
```

#### Example

```
const calcDiscountArrow = (price, discount) => price * (discount / 100);

const discount = 30;
let computer_price = 100;

console.log(calcDiscountArrow(computer_price, discount)); // 30
```

---

## Asynchronous Functions

Asynchronous functions, typically using the `async` and `await` keywords, simplify working with Promises.

#### Asynchronous Function Structure

```
async function name_of_the_function() {
  // implementation of the function
}
```

#### Example

```
// Simulates a delay of an API call
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Github", age: 25 });
    }, 2000); // 2 seconds delay
  });
}

// Async function using await to wait for the result
async function showUserData() {
  console.log("Fetching user data...");

  const user = await fetchUserData(); // Waits here until the promise resolves

  console.log("User data received:");
  console.log(user);
}

// Calling function
showUserData(); // { name: "Github", age: 25 }
```
