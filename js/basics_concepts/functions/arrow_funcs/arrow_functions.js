const calcDiscountArrow = (price, discount) => price * (discount / 100);

const product = {
  name: "Monitor AOC Game Hero 24'",
  price: 1500,
  size: "900x100",
};

const discount = 30;

const result = calcDiscountArrow(product["price"], discount);

console.log(result); // 450

const employees = [
  { name: "Ana", salary: 3500 },
  { name: "Bruno", salary: 5000 },
  { name: "Carlos", salary: 4200 },
  { name: "Daniela", salary: 3900 },
];

const highSalaries = employees.filter((employees) => employees.salary > 4000);

console.log(highSalaries);
// [{ name: 'Bruno', salary: 5000 }, { name: 'Carlos', salary: 4200 }]
