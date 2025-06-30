/*
Exercise 5: Filtering Products by Price
Instructions:

- Declare an array named products. Each element in this array should be an object with name (string) and price (number) properties. Create at least 5-7 product objects.
    Example: [{ name: "Laptop", price: 1200 }, { name: "Mouse", price: 25 }, ...]
- Declare two variables: minPrice and maxPrice, setting a desired price range (e.g., minPrice = 50, maxPrice = 300).
- Create an arrow function isPriceInRange that takes a product object and min and max prices as parameters. It should return true if the product's price is within the range (inclusive), and false otherwise.
- Use the filter() method on the products array, passing the isPriceInRange function as the callback. You'll need to call isPriceInRange within the filter callback, passing the current product and the minPrice/maxPrice variables from the outer scope.
    (Self-correction: The filter callback usually takes one argument (the current item). So, the isPriceInRange function should be adapted, or you can define the logic directly in the arrow function for filter).
Let's refine: Use an arrow function directly in filter that captures minPrice and maxPrice.
 */
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Monitor", price: 1600 },
  { name: "Keyboard", price: 300 },
  { name: "Webcam", price: 60 },
  { name: "Monitor", price: 350 },
  { name: "Headphones", price: 150 },
  { name: "Desk Chair", price: 400 },
  { name: "Microphone", price: 90 },
];

const minPrice = 50;
const maxPrice = 300;

const affordableProducts = products.filter((product) => {
  return product.price >= minPrice && product.price <= maxPrice;
});

console.log(affordableProducts);
