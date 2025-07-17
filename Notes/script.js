/*
Javascript is a 
// basic version
    high-level: don't need to worry about complex things like memory management
    object-oriented: based on objects, which stores most kind of data
    multi-paradigm: we can use different kind of programming styles
    programming language: instruct the computer to do things

// complex version
    high-level: 
        this means that the language have the process called "abstraction" that automaticly asks the computer for memory to store variable and things
        The down side is that the program is less optimised

    garbage-collected: 
        this means the language have buildin algorithms to clean out the unused variables from the memory so we don't need to worry about it. 

    prototype-based object-oriented: 
        a lot of objects is buildin
        objects like Arrays are prototypes than can be used as a blueprint. 
        when we create an array we inherit all the methods from the prototype

    multi-paradigm:
        paradigm are approaches and mindsets of structuring code
        There are 3 popular paradigms (javascript works with all three): 
            1. Procedural Programming: 
                a linear way to code and have functions here and there
            2. Object Priented Programming(OOP): 

            3. Functional Programming(FP): 

    interpreted or just-in-time compiled: 
        this means when we write readable javascript code, it will be translated to machine code with 0s and 1s for the computer to run
            which called 
                compiling:
                    1. the entire code is converted to machine code at once, 
                    2. then it is written in the portable file and can be used in any device. 
                interpreting(interpreter): 
                    1. the code is being converted line by line and executed immediately after translation
        (interpreted languages are much much slower, so Javascript change now is using a mixed of compilation and interpretation)
        This is called Just-in-time compilation: 
            this method compiles the entire file then execute it immediately(no portable file needed)

        this happen inside the Javascript engine

    dynamic: 
        dynamic typed: so we don't give the variables locked in type

    single-threaded: 
        In computing: 
            a thread is a set of instructions the CPU need to execute

        it can only do one thing at a time

language with
    first-class functions: 
        this means functions are treated as variables
            pass funtions into functions
            return functions from functions

and a 
    non-blocking event loop concurrency model: 
        blocking: 
            long-running tasks(fetching data from remote server) is blocking the single-thread
        event loop: 
            this is a way to avoid blocking, it takes the long-running tasks and execute them in the background then put it back into the thread
        concurrency model: 
            javascript engine deals with multiple tasks happening at the same time


Javascript Engine:
    a program that executes javascript code
    
    everything browser have their own engine:
        most famous one is google's V8 Engine: 
            it powers google chrome and Node.js

    Every Engine have: 
        Call Stack: 
            where the code is executed using Execution ontext
        Heap: 
            unstructured memory pool which stores all the objects our application needs

    The Process: 
        1. Parsing: to read the code
            spliting the code into different parts and stored in AST
        2. Compilation: translate the AST to machine code
        2.5) the engine first generate an unoptimized version of the machine code and get that start running, then it will optimize in the background and swap in the optimized code without stopping (this can happen many times)
            This is the reason why modern Engine, like the V8 engine, is so fast
        3. Execution

Javascript Runtime:
    a big box with everything we need to run javascript

    In Browser: 
        1. Javascript Engine(heart of the Runtime)
        2. Web APIs (DOM Timer)
            functionalities provided to the engine and not part of Javascript
            they are accessed through the global window object
        3. callback queue
            when an event happen a backup function is put into the callback queue then passes to the call stack to execute
            this happen through event loop

    In Node.js: 
        1. Javascript Engine
        2. C++ Bindings and Thread Pools
        3. callback queue
*/

// this helps to let javascript tell us if there
"use strict";

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

const greninja = pokemonName + " is " + type + " with " + form + " special form.";
console.log(greninja);

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

/*******************************************************/
// LOGICAL OPERATOR
/*******************************************************/
// not: !
// and: &&
// or: ||

/*******************************************************/
// SWITCH STATEMENT
/*******************************************************/
const day = "monday";
switch (day) {
    case "mondey":
        console.log("hi");
        console.log("hello");
        break;
    case "tuesday":
    case "thursday":
        console.log("NO");
        break;
    default:
        console.log("great");
}

/*******************************************************/
// EXPRESSION && STATEMENT
/*******************************************************/
// expression: they produce a value
// statement: they do something

/*******************************************************/
// CONDITIONAL OPERATOR
/*******************************************************/
const age = 23;
age >= 18 ? console.log("I like to drink") : console.log("I like to drink, too");
const drink = age >= 18 ? "beer" : "water";

/*******************************************************/
// FUNCTION (Value)
/*******************************************************/
// function declarations: can be called before declaration
function greninjaT(typing) {
    return "best";
}
console.log(greninjaT("water"));

// function expression: can't be called before declaration
const pokemonW = function () {
    return "mega";
};
const lucario = pokemonW();
console.log(lucario);

// arrow function
const lycanroc = (type) => "3 form";
console.log(lycanroc("rock"));

const exeggcute = (heads, type) => {
    const difference = heads - 6;
    return difference;
};
console.log(exeggcute(7, "grass"));

/*******************************************************/
// ARRAY (DATA STRUCTURE)
/*******************************************************/
// we can change elements of the array if it is const, just not the entire array
const greninjaW = ["Grass", "Electric", "Bug", "Fairy", "Fighting"];
const greninjaS = ["Ghost", "Steel", "Fire", "Water", "Ice", "Dark"];
const greninjaI = ["Psychic"];
const pikachu = ["pikachu"];
const ash = ["Greninja", "Lucario", "Lycanroc", 3];
// merge two arrays together
const pokemons = ash.concat(pikachu);
console.log(pokemons);
// get elements
console.log(pokemons[0]);
// size of the array
console.log(pokemons.length);
// add elements to the back, also return the new length;
const newLength = pokemons.push("Eevee");
// add elements to the front, also return the new length;
pokemons.unshift("pikachu");
// remove the last element, alse returns the popped element
pokemons.pop();
// remove the first element
pokemons.shift();
// return the location of the elements, return -1 if the element is no in the array
console.log(pokemons.indexOf("greninja"));
// return wether this element is in the array or not
console.log(pokemons.includes("eevee"));

/*******************************************************/
// OBJECTS (DATA STRUCTURE)
/*******************************************************/
// 3 properties (nameP, type, form)
const pokemon = {
    nameP: "greninja",
    type: ["Water", "Dark"],
    forms: ["Greninja", "Ash-Greninja"],
    // any function attached to an object is called METHOD
    // we can use "this" to create new properties
    calcDamage: function (attackType) {
        if (greninjaW.includes(attackType)) {
            return (this[attackType] = "Super Effective");
        } else if (greninjaS.includes(attackType)) {
            return (this[attackType] = "not vary effective");
        } else if (attackType === "Psychic") {
            return (this[attackType] = "Immune");
        } else {
            return (this[attackType] = "normal");
        }
    },
    // "this." is used to call the properties within this object;
    formNum: function () {
        return this.forms.length + " forms";
    },
};
// access the properties
// dot notation: only works with .property-name (don't work with string or other variable names)
console.log(pokemon.nameP);
// bracket notation: works with string(so we can do an expression)
console.log(pokemon["nameP"]);
// this works but we can't do "name"+p with dot notation
const p = "P";
console.log(pokemon["name" + p]);
console.log(pokemon["calcDamage"]("grass"));
console.log(pokemon.calcDamage("Grass"));
console.log(pokemon.formNum());

// adding properties to te object
pokemon.normalForm = "greninja";
pokemon["specialForm"] = "Ash-Greninja";

// PRACTICE
console.log("HI");
console.log(
    `${pokemon.nameP} has ${pokemon.form} forms, it\'s best form is ${pokemon.specialForm}`
);
console.log("hi");

/*******************************************************/
// FOR LOOP (ITERATION)
/*******************************************************/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// continue: next iteration
// break: kill the loop

/*******************************************************/
// WHILE LOOP (ITERATION)
/*******************************************************/
let dice = -1;
while (dice !== 6) {
    // random generate a number between 1 and 6
    dice = Math.trunc(Math.random() * 6) + 1;
}

/*******************************************************/
// USEFUL THINGS
/*******************************************************/

// user input with pop up window (with application of objects)
const info = prompt("What do you want to know about this pokemon?");
if (pokemon[info]) {
    console.log(pokemon[info]);
} else {
    console.log("That's not a thing....");
}

// output with pop up window
alert("Hello World");

if (js === "amazing") alert("Javascript is FUN!");

js = "boring";

// DOM are not part of Javascript, it is in the web APIs, javascript just use it
/*******************************************************/
// DOM(document object model) MANIPULATION (dom tree, tree structure)
/*******************************************************/

// document.querySelectorAll: this select all the elements with this class and store in a nodeList
// select a html element (get the text)
document.querySelector(".testing").textContent;
// get the content of the input field
document.querySelector(".test").value;
// change the content (do .value for input)
document.querySelector(".testing").textContent = "good morning :)";
// another wat to select elements, but only work is ID (a little bit faster)
document.getElementById("name");

/**
 * classList:
 * add: add the class
 * remove: remove the class
 * contains: return true or false for if the element have the class
 * toggle: add/remove the class
 */

// save the class to a variable so it is easier to use it later
const modal = document.querySelector(".modal");
// add the class to element
modal.classList.add("hidden");
// remove the class to element
modal.classList.remove("hidden");

/**
 * for EventListener, everytime an event happen javascript generate an object with the info
 *
 * keyup: when the key is left go
 * keydown: when the key is pressed (once)
 * keypress: when the key is pressed (continuous)
 */
// this make sure that if the element is clicked this excute the function closeModal
btnCloseModal.addEventListener("click", closeModal);
// this listens to wether the "escape" key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});
