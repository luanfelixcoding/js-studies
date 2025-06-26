function searchApiData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulates a 2 second network delay
      const sucesso = true; // change it to (false) to simulate the error
      if (sucesso) {
        resolve({ id: 1, name: "Produto X", price: 120.0 });
      } else {
        reject("Error in searching API data.");
      }
    }, 2000);
  });
}

// Using async/await
async function loadProduct() {
  console.log("Initializing product search..."); // wait for Promise be solved
  try {
    const productData = await searchApiData();
    console.log("Dados do produto:", productData);
    //console.log(`Product Data: ${productData}`);
    console.log("Search concluded successfully!");
  } catch (error) {
    console.error("Sorry, something is wrong: ", error);
  } finally {
    console.log("Search process finalized!");
  }
}

loadProduct();
