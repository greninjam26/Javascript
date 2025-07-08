/*
Javascript is a 
    high-level: don't need to worry about complex things like memory management
    object-oriented: based on objects, which stores most kind of data
    multi-paradigm: we can use different kind of programming styles
    programming language: instruct the computer to do things




*/

/*******************************************************/
// VALUES
/*******************************************************/
// primitive
let js = "amazing";
// 7 data types (JAVASCRIPT AUTOMATICLY DETERMINES THE DATA TYPE)
// Javascript have dynamic typing, which means we can change the data type of variables
let number = 23; //decimals and integers
let string = "Greninja"; //text
let boolean = true; //true and false
let undefine; // no value
null; //empty value
// symbol: value that is unique and can't be changed
// BigInt: numbers that are too large for the number type

// object
let me = {
    name: "Greninja",
};

// output the type of the value
// typeof have the bug that returns "null" as object
console.log(typeof js);

// different ways to define a variable
// let //can be changed
// const //can't be changed
// var //old javascript way, simiar to let

/*******************************************************/
// OPERATIONS
/*******************************************************/
// math operators
// 2 to the power of 3
console.log(2 ** 3);
// assignment operators
let x = 10;
x += 5;
x++;
x--;

/*******************************************************/
// STRINGS
/*******************************************************/
const pokemonName = "Greninja";
const type = "Water and Dark";
const form = 1;

const pokemon = pokemonName + " is " + type + " with " + form + " special form.";
console.log(pokemon);

/*******************************************************/
// TEMPLATE LITERALS
/*******************************************************/
// construction of string
const pokemonNew = `${pokemonName} is ${type} with ${form} special form.`;
console.log(pokemonNew);

// multi-line string
// old way
console.log(
    "String\n\
    with\n\
    multiple\n\
    lines"
);
// new way
console.log(`String 
    with 
    multiple
    lines`);

/*******************************************************/
// If/Else (CONTROLED STRUCTURE)
/*******************************************************/
if (2 > 3) {
    console.log(":)");
} else if (2 > 1) {
    console.log("wow");
} else {
    console.log(":(");
}

/*******************************************************/
// TYPE CONVERSION
/*******************************************************/
const inputYear = "1998";
console.log(Number(inputYear), inputYear);

console.log(Number("hi"));
// NaN: not a valid number is still number type
console.log(typeof NaN);

/*******************************************************/
// TYPE COERCION
/*******************************************************/
console.log("I am" + 23 + ".");
console.log("10" - "5" - 3);
console.log("10" + "5" - 3);
console.log("10" - 3 + "5");

/*******************************************************/
// BOOLEAN CONVERSION
/*******************************************************/
// truthy values: values will be true when converted to boolean
// anything else
// falsy values: values will be false when converted to boolean
// 0, '', undefine, null, NaN

/*******************************************************/
// EQUALITY OPERATOR
/*******************************************************/
// === strict equality / !== inequality: no type coerion
console.log(18 === "18");

// very buggy usually don'y use it
// == loose equality / != inequality: type coerion
console.log(18 == "18");

// user input with pop up window
const curTime = prompt("What time is it?");
console.log(curTime);

// output with pop up window
alert("Hello World");

if (js === "amazing") alert("Javascript is FUN!");

js = "boring";
