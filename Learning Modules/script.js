// Importing Module
// add the exported variables
// named exports have to have the {}
import { addToCart, no, hiii as good } from "./shoppingCart.js";
// this put all the exported variables into an object
import * as shoppingCart from "./shoppingCart.js";
// default exports we don't need to put it in {}
import num from "./shoppingCart.js";
console.log("Importing Module");

addToCart("breads", 5);
console.log(no);
console.log(good);
console.log(shoppingCart);
console.log(num);

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
console.log(res);
const data = await res.json();
console.log(data);

// (old) module pattern
const shoppingCartOld = function () {
    const shippingCost = 10;
    const cart = [];

    // named default(add export front of anything)
    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to the cart.`);
    };
    const hi = 0;
    return {
        addToCart,
        hi,
    };
};
