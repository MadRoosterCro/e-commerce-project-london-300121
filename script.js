const products = require('./products');

// get the prices and the range

const prices = [];
products.forEach((product) => {
    prices.push(product.price);
});

console.log("Prices", prices)

const pricesSorted = prices.sort();
console.log(pricesSorted[0], pricesSorted[pricesSorted.length - 1]);


