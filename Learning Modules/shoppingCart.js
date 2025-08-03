// Exporting Module
console.log("Exporting Module");

const shippingCost = 10;
const cart = [];

// named default(add export front of anything)
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart.`);
};

const hi = 0;
const hiii = 20;
export { hi as no, hiii };

// default export just export the value with no variable name
export default 10;