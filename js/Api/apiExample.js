const URL = "https://dummyjson.com/products";

async function callingAPI() {
  const response = await fetch(URL);
  if (response.status == 200) {
    const obj = await response.json();
    console.log(obj);
  }
}

callingAPI();
