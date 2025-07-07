/*
Javascript is a 
    high-level: don't need to worry about complex things like memory management
    object-oriented: based on objects, which stores most kind of data
    multi-paradigm: we can use different kind of programming styles
    programming language: instruct the computer to do things




*/

// VALUES
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

// output with pop up window
alert("Hello World");

if (js === "amazing") alert("Javascript is FUN!");

js = "boring";
