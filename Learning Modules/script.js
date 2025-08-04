// Importing Module
// add the exported variables
// named exports have to have the {}
import { addToCart, no, hiii as good } from "./shoppingCart.js";
// this put all the exported variables into an object
import * as shoppingCart from "./shoppingCart.js";
// default exports we don't need to put it in {}
import num from "./shoppingCart.js";

// not practical
// import cloneDeep from "lodash-es/cloneDeep.js";
// with module bundler
import cloneDeep from "lodash-es";

console.log("Importing Module");

addToCart("breads", 5);
console.log(no);
console.log(good);
console.log(shoppingCart);
console.log(num);

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(res);
// const data = await res.json();
// console.log(data);

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

// CommonJS (A lot of Node.js)(don't really work here)
// // import
// const { hi } = require("./shoppingCart.js");
// // export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart.`);
// };

const num1 = {
    hi: [
        { h: 0, i: 10 },
        { h: 0, i: 10 },
    ],
    iiii: { hi: 10 },
};
// this works
const num2 = structuredClone(num1);
// but we can do this too
const num3 = cloneDeep(num1);
num1.hi[0].h = 1000;
num1.iiii.hi = 20;
console.log(num1);
console.log(num2);
console.log(num3);

// when a module is modified it will not trigger a page reload
if (module.hot) {
    module.hot.accept();
}
