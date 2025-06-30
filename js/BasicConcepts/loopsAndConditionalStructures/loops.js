const numeros = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); //1, 2, 3, 4, 5
}

// Most modern way to use with arrays
numeros.forEach((numero) => {
  console.log(numero * 2); // 2, 4, 6, 8, 10
});

// while loop
let j = 0;

while (j < numeros.length) {
  console.log(numeros[j]); // 1, 2, 3, 4, 5
  j += 1;
}
