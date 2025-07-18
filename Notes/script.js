/*
Javascript is a 
// basic version
    high-level: don't need to worry about complex things like memory management
        Memory Management:
            What it is:      
                how the Javacript Engine allocate memory to create variables
                Then free up the space when the variable is no longer needed
            Memory Lifecycle:
                1. a piece of memory is allocated to store the variable
                    for different types of values, the memory is allocated from different part of the javascript engine
                        technicly they are stored in the variable environment of the execution context, which is in the call stack
                        objects: store in the heap
                        references to objects: store in the call stack
                            when a variable is set to an object, it does not store the function itself, it stores the references to the object
                            in technical terms: it is the memory address of the object that is stored, not the object itself
                                This is why when multiple variable store the reference to the same object, and when we change one of them all the other variable will also have altered result because the original object is changed. 
                                to avoid this problem do this
                                    This is a shallow copy, because it only copies the first level object, and the nest objects are still references
                                    newObject = {...object};
                                    but if the are objects inside this "object" then when copying the "object" we run into the same problem again, with change a reference we change the original object
                                A Better Way:
                                    This is called deep clone/copy
                                    newObject = structuredClone(object);
                        primitive: store in the call stack
                        might be exception because the engine is so sophisticated
                2. the memory is use to write, read, or update the variable
                3. the memory occupies is released when the variable no longer needed
                    Call Stack:
                        when execution context is poped off, its variables are simply deleted
                    Heap:
                        The process called Garbage-Collection deals with it
                        Modern Javascript Engine uses Mark-and-Sweep Algorithm to do this
                        Mark-and-Sweep Algorithm:
                            1. Mark Phase: marking all the objects that are reachable from a root(like Execution Contexts, EventListeners, Timer, Closure) as "alive"

                            2. Sweep Phase: all unmarked objects are deleted and memory reclaimed
                                MEMORY LEAK:
                                    this is when an object in the heap is not needed but is still somehow reachable and not deleted
                                By always deactivite EventListeners and Timers, it helps to prevent memory leaks


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
            where the code is executed using Execution context
            it is also where the execution contexts are stacked ontop of each other in order to keep track on where we are in the program
            the execution context on top will be the one currently running, it is removed when it is finished
        Heap: 
            unstructured memory pool which stores all the objects our application needs

    The Process: 
        1. Parsing: to read the code
            spliting the code into different parts and stored in AST
        2. Compilation: translate the AST to machine code
        2.5) the engine first generate an unoptimized version of the machine code and get that start running, then it will optimize in the background and swap in the optimized code without stopping (this can happen many times)
            This is the reason why modern Engine, like the V8 engine, is so fast
        3. Execution
            1. a global execution contexts is created for the top level codes
                top level code: code not in a function
                Execution Contexts: an environment where Javacript is executed
                    it contains the code and other necessary information that is needed to execute the code
                    not matter how much code there are, there is always only one execution context for the top level code
                    For each function or method, a new exection context is created and waiting for it to be called

                    Contains: all these are generated during the creation phase, which is right before the execution phase. 
                    (arrow function execution contexts don't have argument object or the "this")
                    they use the ones from their closest parents
                        Variable envirment: 
                            this is where all the variable and function declarations are stored
                            it also have a special arguments object
                                this stores all the arguments passed into the object
                                It is like the this keyword, expect of all the scoping problem
                                argument can only be called in a function
                                not really useful anymore
                            
                            Hoisting: 
                                What it is:
                                    this makes some of the variable useable because they are defined in the code
                                What it looks like: 
                                    the variable it moved to the top of the scope
                                How it works:
                                    During the creation phase: 
                                        the code scan for variable declaration before it is executed
                                        for each variable a new property is created
                            
                            Temporal Dead Zone:
                                this is the part of the code before a variable is create, so the engine knows that variable is going to be initalize but it is not initalized yet. 
                                this makes it easier to found bugs and help coders to avoid using the variable before it is declared
                            
                        Scope chain:
                            it contains the references to variables stored outside the function
                            it allows the variable inside a scope to access all the variables in the parent scopes

                            Scoping: this is how the program organize and access the variables
                            Lexical scoping: the scoping is controlled by the placement of functions and blocks inside the code
                            Scope: the space or envirment where a variable is declared
                                Global Scope: top level code, the codes that are outside any function or block
                                    these variable can be accessed anywhere
                                Function Scope(also called local scope): every function create a function scope
                                    the variable declared inside the function can only be accessed inside the function
                                Block(anything inside {}) Scope: this only start at ES6
                                    the variables(let and const) declared in a block can't be accessed outside of it

                            The Scope of an Variable: is the region with the variable can be accessed
                            

                        "This" keyword:
                            Definition: 
                                it always takes the value of the "owner" of the function, or points to the function
                            Examples:
                                1. in a method(a function attached to an object): 
                                    this = the object
                                2. just there in the code:
                                    this = the window object 
                                3. inside a function that is not attached to anything
                                    in strict mode
                                        this = undefine
                                    else
                                        this = the window object
                                4. in arrow function: 
                                    this = the parent function of the arrow function(NOT the arrow function)
                                5. in EventListener:
                                    this = The DOM element
                            it is NOT:
                                point to the function itself
                                its variable environment
                


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

Iterables: 
    Array, Strings, Maps, Sets, NOT Objects

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
// side notes:
//      Nullish Values: null and undefined
//          this helps to fix the problem with 0 and '' is false when we don't want it to be

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
/**
    not: !
    and: &&
    or: ||
        && and || doesn't have to return boolean values
        they can use any data type, return any data type through short-circuiting or short-circuit evaluation
    ||: 
        if the first value is a truthy value, then it will return the first value, or it return the second value
        when multiple is chain together, it will return the first truthy value or the last value
    &&:
        exact opposite of ||
        so it returns the first falsy value, or the last value
 */
// skip if statements
10 > 5 && console.log("great");

const charizard = {
    stage: 2,
    form: 3,
};
const psyduck = {
    stage: 0,
};
// one way to add the "form" to all the object
charizard.form = charizard.form || 1;
psyduck.form = psyduck.form || 1;

/*******************************************************/
// Nullish Coalescing Operator
// Nullish Values: null and undefined
//     this helps to fix the problem with 0 and '' is false when we don't want it to be
/*******************************************************/
console.log(0 || 10);
console.log(0 ?? 10);

/*******************************************************/
// LOGICAL ASSIGNMENT OPERATOR
/*******************************************************/
// a better way to add all "form" to the objects
// OR assignment operator
charizard ||= 1;
psyduck ||= 1;
// even better way
// nullish assignment operator
charizard ??= 1;
psyduck ??= 1;
// AND assignement operator
let aaa = 10;
aaa &&= 1;

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

/////////////////////////////////////////////////////////
// array destructuring
/////////////////////////////////////////////////////////
// this allow us to create 3 variable and store the first three elements of the array
// const a = ash[0];
// const c = ash[2];
// we can set default values to prevent getting values with undefine, because IndexOutOfBound :)
const [a = 1, , c = 1, , d = 1] = ash;
console.log(a, c, d);
// swap elements
let ditto = "normal";
let flareon = "fire";
[ditto, flareon] = [flareon, ditto];

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
            return (this[attackType] = "not very effective");
        } else if (attackType === "Psychic") {
            return (this[attackType] = "Immune");
        } else {
            return (this[attackType] = "normal");
        }
    },
    calcDamageN: function (attackType) {
        if (greninjaW.includes(attackType)) {
            return 2;
        } else if (greninjaS.includes(attackType)) {
            return 0.5;
        } else if (attackType === "Psychic") {
            return 0;
        } else {
            return 1;
        }
    },
    // "this." is used to call the properties within this object;
    formNum: function () {
        return this.forms.length + " forms";
    },
    // with object destructuring we can also set default values to the argument
    alive: function ({ damageType, incomingDamage, currentHP = 200 }) {
        if (currentHP - incomingDamage * this.calcDamageN(damageType) > 0) {
            console.log("still battling");
        } else {
            console.log("knocked out");
        }
    },
    stats: {
        hp: {
            IV: 255,
            EV: 255,
        },
        attack: {
            IV: 255,
            EV: 255,
        },
        defence: {
            IV: 255,
            EV: 255,
        },
        spAtk: {
            IV: 255,
            EV: 255,
        },
        spDef: {
            IV: 255,
            EV: 255,
        },
        spped: {
            IV: 255,
            EV: 255,
        },
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

/////////////////////////////////////////////////////////
// object destructuring
/////////////////////////////////////////////////////////
// we don't need to care about the order of the properties but the variable name have to be the same as the properties name or use :
const { nameP: pokemonN, forms } = pokemon;
// we can set default value;
const { region = [], stats: power = [] } = pokemon;

// changing variables
let m = 10;
let n = 10;
const nums = { a: 1, b: 2, c: 3 };
// have to have the () around or a line start with { javascript expect a code block;
({ m, n } = nums);

// nested objects
const {
    stats: { spAtk: s, hp: h },
} = pokemon;
console.log(s);
console.log(h);

// application (pass many argument into a function without worrying about the order)
pokemon.alive({
    incomingDamage: 100,
    damageType: "Normal",
    currentHP: 100,
});

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
// Spread Operator (right side of =)(works on all Iterables)
/*******************************************************/
// expand an array to all its element
const arr = [2, 3, 4];
// don't need to do [4, 5, arr[0], arr[1], arr[2]];
const arrr = [4, 5, ...arr];
// output all the elements seperatly (2 3 4) instead of ([2, 3, 4])
console.log(...arr);

// even though it works on all Iterables, but it can only be used to build an array and anywhere that expect values seperated by "," like pass function variables
const str = "greninja";
const strr = [...str, "W"];
console.log(strr);

/*******************************************************/
// Rest Operator (left side of =)
/*******************************************************/
// combine elements together, collects the unused element during destructuring, if you skipped an element it is gone not collected
// it must be the last element in destructuring
const [aa, bb, ...other] = [1, 2, 3, 4, 5];
// works with object destructuring too
const { attack, ...otherStats } = pokemon.stats;
console.log(attack);
console.log(otherStats);

let activeP = [];
// with functions arguments
function team(...pokemon) {
    activeP = [...activeP, ...pokemon];
}
team("Greninja");
team("Lucario", "Mega Lucario");
team(...ash);
console.log(activeP);

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
