/*
Planning for a project
    1. user stories
        this the functionality of the app in the user's perspective
        Common format:
            As [who?], I want to do [What?] so that [why?]
    2. features
        from the user stories we can develop features to make the stories work
    3. Flowchart(what will be build)
        then we make a flowchart showing what the user can do and what will happen when the user did that
    4. Architecture(how will it be build)
        how do we organize the code, and what javascript features will we be using

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
                        when execution context is poped off, its variables are simply deleted (not very true, the variables with in the execution context still lives in the memory and stored in the heap)
                        Closure: makes a function rememeber all the variables that is there when it is born/created
                            it makes the functions created have access to the variable envirement of. the execution context it was created in
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
                this is based on the concept of objects
                we use objects to model the real world(user or todo list) and abstract features(HTML components and data structures)
                with objects we can pack all the related information to one block
                objects can contain data(the properties) and actions(the methods)
                objects are self contained blocks and used to interact with each other from A Public Interface(API):
                    methods codes outside the object can access and communicate with the object
                This paradigm is designed to organize the code and make it more flexable and easier to maintain. 
                use CLASS as a template to copy to many other objects
                CLASS TEMPLATE GUIDE LINES:
                    Abstraction:
                        ignore some details to get a better view of the big picture
                    Encapsulation:
                        keeping some properties and methods private to protect it
                    Inheritance:
                        parent classes and child classes, the child classes will get all the properties and methods of the parent class. 
                    Polymorphism:
                        by have the same name of the the methods in the child class, it will replace the one inherited from the parent class. 
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

            this is like a todo list, where all the callback function need to be executed
            when a new callback function need to be executed then it will be added to the end of the callback queue.
            so if there are a lot of callback functions need to be executed it might take a while
            Example:
                so if a timer is set to be executed after 5 seconds, it means it will not be executed before 5 second, but it can be executed at any time after 5 seconds. 
                this is because normal it suppose to executed right away after 5 seconds, but if there are other callback being executed, it need to wait for its term. 

            What it have:
                all the asynchonous functions will be passed in
                    the promises will not be in the callback queue, it is in the microtasks queue. 
                DOM eventlisteners

            this happen through event loop:
                1. it checks if the call stack is empty or not
                2. if it is empty, which means it is not executing any code
                3. then it passes in the first function from the callback queue to the call stack
        4. Microtasks(promises) queue:
            this is for promises
            this queue also have priority over the callback queue
            so when the event loop checks what functions to run it will pass the function in this queue to the call stack
            then when this queue is empty it will go back to passing the function in the callback queue

    In Node.js: 
        1. Javascript Engine
        2. C++ Bindings and Thread Pools
        3. callback queue

Synchronous code:
    most of the code are synchronous
    they will be executed line by line in order
    it is executed in the execution thread(part of the execution context)
    if a line take a long time to run, like a alert or prompt it will block the code

Asynchronous code:
    like a timer
    they will execute the code after a task is executed in the background
    so this makes asynchronous code non-blocking
    execution doesn't wait for asynchronous code to finish it will just keep going
    Examples:
        loading img:
        geolocation
        AJAX(Asynchronous Javascript And XML(the old data transfer format)):
            this allows us to communicate with the web server in an asynchronous way. 
            we can request data dynamically
            HOW TO CALL CHECK "COUTNRY INFO" MINI PROJECT
            use with promises(ADDED in ES6)

API(Application Programming Interface):
    What it is:
        piece of software used with another software to allow application communicate with each other. 
    Examples:
        DOM API
        Geolocation API
        Class APIs
        "Online" APIs:
            application on a server have recive data requests and send the data. 

Web Requests and Responses:
    Name:
        The Request-response Model
        Client-server architecture
    https://countries-api-836d.onrender.com/countries
   Protocol|          Domain name          |Resources
    Protocol: "http" or "https"
    Domain name:
        this might not be the real link we are trying to access
        so we need something to translate
        DNS: Domain Name Server
            this matches the server IP address to the url
    The Real Address:
    https://104.27.432.434:443
   Protocol|  IP Address  |Resources
    
    Then after all these a connection between the browser and the server will be established
    The connections:
        TCP(Transmission Control Protocol) socket connection
        IP(Internet Protocol) socket connection
            These two are the ones setting the rules on how data move in the internet. 
            These connections are kept for the entire time for transmating data. 
    
    Then a HTTP(Hypertext Transfer Protocol) request is made
    When the server have all the data ready
    Then it will send it all back with a HTTP Response
        the Response have the same strucutre as the Resquest
        but the header include a status code and message(200: OK, 404: not found)

    Communication Protocol: 
        a system of rules that allows two or more parties to communicate
        HTTP:
            a protocol allows client and server to communicate
            we can get and send data to a server
            Resquest:
                when the request is send, the target will be the Resouces in the url
                Then it is the header of the request, which contain information about the request
                When sending data to the server there will also be a request body
        HTTPS: the only difference is, it is encrypted TLS and SSL
        TCP:
            Break the the requests and responds into small packets then transported. 
            Then way it can go very fast. 
            then it will assemble all of them back to the requests and responds at the destination.
        IP:
            this only make sure that the small packets arrives at the correct destination


Iterables: 
    Array, Strings, Maps, Sets, NOT Objects

Data Structures:
    build-in:
        array:
            store values in order or need duplicate values
            manipulate data
        set: 
            use when we need to work with unique values
            or we want the code to be very fast when searching or removing values
            it is 10 times faster
        object:
            traditional key/values storeage
            it is much easier to access values with the . and []
        map: 
            map key can be any type
            it is also easier to iterate
            easier to compute the size of a map
            "this" doesn't work with map

        weakmap, weakset
    non Build-in:
        stack, queue, linked list, tree, hash table
    data can come from: 
        1. the program itself
            data from the source code
        2. the UI
            user input data from data in the DOM
        3. external sources (most common source of data income)
            data fetched from web API, that got the data from other web apps
                data coming from web API usually comes in the data format of JSON
                    JSON: uses the same format as javascript objects and arrays

    How to Store the Data:
        in lists?
            array and set
        in key/value pairs?
            object and map

What Array Method?
    Mutate the original (avoid if possible, we shouldn't be changing the original array too much):
        add:
            .push()
            .unshift()
        remove:
            .pop()
            .shift()
            .splice()
        alter:
            .reverse()
            .fill()
            .sort()
    Create new Array:
        same length as original:
            .map()
            .slice() (copy)
            .with() (replace)
        filter:
            .filter()
        take part of the original
            .slice()
        flatten:
            .flat()
            .flatMap()
        non-alter:
            .toReversed()
            .toSpliced()
            .toSorted()
        join arrays:
            .concat()
    Find index:
        base on the value:
            .indexOf()
        base on condition:
            return index:
                .findIndex()
                .findLastIndex()
            return element:
                .find()
                .findLast()
        retrive element: 
            .at()
    Check if the array meet the condition:
        base on the element:
            .includes()
        base on condition:
            .some()
            .every()
    Transform to string:
        .join()
    Transform to a single value:
        .reduce()
    Loop the array:
        .forEach()

Script Loading:
    regular:
        In the <head>:
            part of the HTML will be parsed
            then the script is fetched
            then the script executed
            then finish parsed HTML
            return DOMContentLoaded event
        in the end of the <body>:
            all the HTML will be parsed
            then the script is fetched and executed
            return the DOMContentLoaded event
    async:
        In the <head>:
            part of the HTML will be parsed while the script is fetched
            then the script is executed
            then finish parsing the HTML
            return the DOMContentLoaded event
        Problem:
            1. DOMContentLoaded
                the DOMContentLoaded will be return when the HTML is parsed
                but if the fetching process of the script takes longer than the parsing of HTML
                then the DOMContentLoaded event will be return without finishing fetching and executing the script
            2. Script Execution Order
                the scripts fetched in this format will be not guaranteed to execute in order
        Use Cases:
            we can use this when the order of the javascript loaded doesn't matter like 3rd party scripts
    defer:
        In the <head>:
            the entire HTML is parsed and the script is fetch during this time
            then the script is executed
            return the DOMContentLoaded event
        Use Cases:
            generally a good option for our owns scripts and other libraries that loading order matters. 

Modern Javascript
    divide a big script into many different modules
    we can also add 3rd party modules(packages)
    NPM repository have a lot of these packages
    NPM is the repository and the software that we use to install these packages
    Sections:
        1. we write all the code in modules
        2. javascript bundlers will bundle all the codes together
        3. then it will be translated to ES5 setax so old browers can run the code
        4. then upload to the server
*/

// this helps to let javascript tell us if there
"use strict";

/*******************************************************/
// VALUES
/*******************************************************/
/////////////////////////////////////////////////////////
// primitive
/////////////////////////////////////////////////////////
let js = "amazing";
// 7 primitive data types (JAVASCRIPT AUTOMATICLY DETERMINES THE DATA TYPE)
// Javascript have dynamic typing, which means we can change the data type of variables
/////////////////////////////////////////////////////////
// 1.
// represented internally as 64 bits, only 53 are used, the reset are used to store the decimal points and the sign.
let number = 23; //decimals and integers
// the largest number Number can store, anything bigger than this sometimes work, sometimes doesn't
let maxNum = Number.MAX_SAFE_INTEGER;
/////////////////////////////////////////////////////////
// 2.
let string = "Greninja"; //text
/////////////////////////////////////////////////////////
// 3.
let boolean = true; //true and false
/////////////////////////////////////////////////////////
// 4.
let undefine; // no value
/////////////////////////////////////////////////////////
// 5.
null; //empty value
/////////////////////////////////////////////////////////
// 6.
// symbol: value that is unique and can't be changed
/////////////////////////////////////////////////////////
// 7.
// added in ES2020
// BigInt: numbers that are too large for the number type, But it have to be Integer not decimal numbers
// this works will with all the operation with Number
// BUT it can't do operations with other types and Math.
//      exceptions:
//          logic operator still works
//          adding with string still works
// don't really work
console.log(242346342626432624524354353425);
// with BigInt it works (n converts it to bigInt)
console.log(12532626543254325124523452345324n);
// even with the BigInt() javascript still need to use Number and convert it to BigInt
// so this should only be used with smaller number the do calculation
console.log(BigInt(124535325353253224));

/////////////////////////////////////////////////////////
// object (more below)
/////////////////////////////////////////////////////////
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

// we can get the element from a string, like an array
console.log(pokemonName[0]);
console.log("greninja"[5]);
// get the length of a string
console.log(pokemonName.length);
console.log("greninja".length);

/////////////////////////////////////////////////////////
// string methods
// HOW?? isn't string primitive??????
// through boxing, which is whenever a method is called on a string, it is put into a string object and call the methods
/////////////////////////////////////////////////////////
// only return the first occurrence of the letter or words, if it is not in the string then return -1
console.log(pokemonName.indexOf("n"));
console.log(pokemonName.lastIndexOf("n"));

// get substring from the string, starting from the index, inclusive, to the ending index, exclusive
console.log(pokemonName.slice(3));
console.log(pokemonName.slice(3, 5));
//extract the first word
console.log(type.slice(0, type.indexOf(" ")));
console.log(type.slice(type.lastIndexOf(" ") + 1));
// we use negative index, -1 is the last element
console.log(type.slice(-3));
console.log(type.slice(1, -1));

// change string to all upper case or lower case
console.log(pokemonName.toUpperCase());
console.log("HI".toLowerCase());
// this method removes all the whitespace infront and behind(NOT THE ONES IN THE MIDDLE) a string like space and \n
// ES2019 added trimStart() and trimEnd()
console.log("      .   \n  pokemon".trim());

// applicaiton fix names
function nameFix(name) {
    const nameLower = name.toLowerCase();
    const nameCorrected = nameLower[0].toUpperCase() + nameLower.slice(1);
    return nameCorrected;
}
console.log(nameFix("grENINja"));
// check emails, because capitalization for email doesn't matter
function checkEmail(email, emailCorrect) {
    return email.toLowerCase().trim() === emailCorrect;
}
if (checkEmail("     hElLo@Gmail.COM  \n", "hello@gmail.com")) {
    console.log("Email is Correct");
} else {
    console.log("EMAIL is WRONG!!!");
}

// replace part of the string
console.log(pokemonName.replace("G", "g").replace("ja", "ß"));
console.log(pokemonName.replaceAll("n", ":)"));
//before replaceAll we can use regular expression to make replace target all elements
// the g stand for global, it makes replace target all "n" in the string
console.log(pokemonName.replace(/n/g, "💀"));

// these methods return boolean
// returns wether the string contains "hi"
console.log(pokemonName.includes("hi"));
// returns wether the string starts with "hi"
console.log(pokemonName.startsWith("hi"));
// returns wether the string ends with "hi"
console.log(pokemonName.endsWith("hi"));

// split string into many parts base on the a divider string, it returns a array containing the chopped up strings and without the divider
console.log("hello good morning".split(" "));
const [pkName, pkType] = "Ditto Normal".split(" ");
console.log(pkName, pkType);
// join combines everything in the array into a string
const arrrr = [10, 10];
// the default for .join() is the same as .join(",")
console.log(arrrr.join(" "));

// padding, this add characters to the string until it is at the required length
console.log(pokemonName.padStart(45, "greninja"));
console.log(pokemonName.padEnd(45, "Ash"));

// repeating the same string multiple times
console.log("good morning?".repeat(5));

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
// Nullish Coalescing Operator (added in ES2020)
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
// javascript don't have pass by reference only pass by value, even though it might be passing a reference of objects, it is passing that reference as a value
// FIRST CLASS function:
//     functions in javascript can be treated as values that can be stored
// HIGHER-ORDER function:
//     functions that recieves or returns another function
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
const lycanroc = type => "3 form";
console.log(lycanroc("rock"));

const exeggcute = (heads, type) => {
    const difference = heads - 6;
    return difference;
};
console.log(exeggcute(7, "grass"));

// we can have default values the arguments (added in ES6)
// the dynamic calculation of the default value have to follow the rule from left to right
function hi(num = 0, sum = num * 4) {
    console.log(num);
    console.log(sum);
}
hi(2);
hi();
// if we want to skip an argument we set it to undefine
hi(undefine, 2);

// low level functions doing basic jobs
const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
};
const upperFirstWord = function (str) {
    const [first, ...other] = str.split(" ");
    return [first.toUpperCase(), ...other].join(" ");
};
/////////////////////////////////////////////////////////
// higher-order function
/////////////////////////////////////////////////////////
// abstraction: by taking how the "fn" and make it into another function we create a level of abstraction, so this transformer function don't care how the str is transformed it only transform it.
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    // functions also have methods build in which we can call
    console.log(`Transformed by: ${fn.name}`);
};
transformer("Autobots rollout!!!", upperFirstWord);
transformer("Autobots rollout!!!", oneWord);

// function return another function
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greet1 = greeting => name => console.log(`${greeting} ${name}`);
const greeting = greet("hi");
greeting("greninja");
greet("hello")("pikachu");
greet1("hello")("lucario");

/////////////////////////////////////////////////////////
// THIS KEYWORD
/////////////////////////////////////////////////////////
const dragonite = {
    name: "dragonite",
    fly(height, time) {
        console.log(`${this.name} flied at the height of ${height}m for ${time}mintes`);
    },
};
const talonflame = {
    name: "talonflame",
};

dragonite.fly(10, 10);
const fly = dragonite.fly;
// this.name breaks because this function is not in an object any more so this points to undefine
// fly(10, 10);
// .call() allow us to define what "this" is pointing to with the first argument
fly.call(dragonite, 10, 10);
fly.call(talonflame, 20, 20);
// .apply() does the same things by the argument for the function need to be an array
// not used much any more because we can spread arrays
fly.apply(dragonite, [50, 50]);

// .bind() also allows us to set "this" manually, but returns a new function is "this" locked in
// if we add more values to .bind() it will be the same as .call() and everything in there is locked in.
const talonflameFly = fly.bind(talonflame);
talonflameFly(10, 10);
// partical application
// we can use the .bind(null) to lock in argumen for the function
const hiiiiii = function (n) {
    console.log("hi".repeat(n));
};
const hi5 = hiiiiii.bind(null, 5);
hi5();
// without bind to do the same thing
const addTax = rate => value => value + value * rate;
const addVAT = addTax(0.23);
console.log(addVAT(100));

/////////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
// functions only runs once
/////////////////////////////////////////////////////////
// with function there are scopes and all variables in a function is private, which means that it will not be overwritten by other variables or external scripts
// this way we can run the codes onces and protect it from other sources
// this way of using functions are not used anymore in modern javascript anymore
// because in ES6, when const and let is encapsulated in {} they will also be private and can't be accessed.
(function () {
    console.log("this will not run again");
})();

(() => console.log("this also will not run again"))();

/*******************************************************/
// ARRAY (DATA STRUCTURE)
/*******************************************************/
// this create an emputy array with 7 spaces
const aaaa = new Array(7);
// the only way to fill this without doing it with loop is
// we can add starting index, inclusive, after the added number, and ending index, exclusive.
aaaa.fill(10);
console.log(aaaa);
// another way to fill array is by doing this
// this fill the entire array with 1
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// we can do better
const z = Array.from(y, (cur, i) => cur + i);
console.log(z);
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

/////////////////////////////////////////////////////////
// more array methods
/////////////////////////////////////////////////////////
// works the same as the string.slice(), start from the first index, inclusive, and end with the second index, exclusive. it returns a new array without modifying the original array.
console.log(ash.slice(0, -1));

// getting the last element of an array
// old ways
console.log(ash[ash.length - 1]);
console.log(ash.slice(-1)[0]);
// new way at() (added in ES2022)
// the at() also works on strings, so it treats arrays and strings the same
console.log(ash.at(-1));

// forEach() require a function and apply that to every element, which is past in as the argument of the function, it also passes the index, and the array
// for map, the argument are pasted in the order of (value, key, map)
// for set, the argument are pasted in the order of (value, _, map) (_ in javascript is used for throw away variables)
ash.forEach(function (element, i, arr) {
    console.log(`${i}: ${element}`);
    console.log(arr);
});

// map: this can perform an operation on each element of the array and store them in a new array
const teamAsh = ash.map((pokemon, i) => `${i + 1}. ${pokemon}🎉`);
console.log(teamAsh);
// filter: it returns a new array after being filtered, which mean some of the elements are removed
ash.push(3);
const ashNew = ash.filter(function (pokemon) {
    return typeof pokemon === "string";
});
console.log(ashNew);
// reduce: through an operation reduce all the element down to one value
// we need to not only define the function, but also give an initial value of the "acc", or it will be set to the first element in the array
ash.pop();
const AshTeamI = ash.reduce(function (acc, cur, i, arr) {
    console.log(acc);
    return acc + cur[0];
}, "");
console.log(AshTeamI);
// we can use reduce to find the max value
const numbers = [10, 5, 10, 10, 20, 100];
const max = numbers.reduce((maxNum, cur) => (maxNum > cur ? maxNum : cur));
console.log(max);
// Added in ES6
// this is used to find the first element in the array that matches the condition, and return the element itself
console.log(ash.find(pokemon => pokemon.toLocaleLowerCase() === "greninja"));
// this is similar just returns the index instead of the element
console.log(ash.findIndex(pokemon => pokemon.toLocaleLowerCase() === "greninja"));
// Added in ES2023
// .findLast
// .findLastIndex
// they works the exactly the same as .find and .findIndex
// they just return the "last" instead of "first" as they name states

// this returns wether there is elements in this array that meet this condition
console.log(ash.some(pokemon => typeof pokemon === "Number"));
// .every() works the same, but it need all the elements to meet the condition to return true

// added in ES2019
// .flat() this expands the first layer of nested arrays
const arrrrr = [[[10, 10], 10, 10], [10], 10, 10];
console.log(arrrrr.flat());
// but .flat(2) can expand this 2 layered nested arrays
// the argument means how many layers can .flat() expand
console.log(arrrrr.flat(2));
// because we use .map([function]).flat() a lot
// .flatMap([function]) is created, the only difference is that we can't make .flatMap() expand more than one layer

// added in ES2024
// this returns an object contains two arrays with matching property names
console.log(Object.groupBy(arrrrr, num => (num > 0 ? "greater" : "smaller")));

/////////////////////////////////////////////////////////
// array altering methods (destructive)
/////////////////////////////////////////////////////////
// these methods will alter the original array instead of returning a new array

// .splice() cut off the part from the original array
// the second parameter is not the ending index it is how many elements are going to be cut
console.log(ash.splice(-1));
console.log(ash);

// .reverse() reverses the original array
console.log(ash.reverse());
console.log(ash);

// sorting array
// this changes the original array, it is sorting the array but converting it to strings first, do when sorting numbers is it wrong(so we need a function to pass into the sort())
ash.sort();
console.log(ash);
//numbers accending
const arrrrrr = [10000, 200, 15, 30, -10];
// a is the curent element b is the next element
// if return > 0 B A
// if return < 0 A B
arrrrrr.sort((a, b) => a - b);
console.log(arrrrrr);

/////////////////////////////////////////////////////////
// array altering methods fix
/////////////////////////////////////////////////////////
// these new methods were added to use and not alter the original array
// .reverse() ===> .toReversed()
// .splice() ===> .toSpliced()
// .sort() ===> .toSorted()
// there is a new addition for replacing elements in array
// arr[0] = 20 ===> .with(0, 20)

/*******************************************************/
// OBJECTS (DATA STRUCTURE)
/*******************************************************/
const stats = {
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
};
// 3 properties (nameP, type, form)
// with ES6 we can do experssions for the property names
const pro = ["nameP", "type", "form"];
// object literal {}
const pokemon = {
    // with in [] it can be any expression
    [pro[0]]: "greninja",
    type: ["Water", "Dark"],
    ["form" + "s"]: ["Greninja", "Ash-Greninja"],
    // any function attached to an object is called METHOD
    // we can use "this" to create new properties
    // With ES6 we can turn this
    // calcDamage: function (attackType) {
    // into
    calcDamage(attackType) {
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
    calcDamageN(attackType) {
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
    formNum() {
        return this.forms.length + " forms";
    },
    // with object destructuring we can also set default values to the argument
    alive({ damageType, incomingDamage, currentHP = 200 }) {
        if (currentHP - incomingDamage * this.calcDamageN(damageType) > 0) {
            console.log("still battling");
        } else {
            console.log("knocked out");
        }
    },
    // ES6 enhanced obejct literals, we don't need to do "stats: stats," anymore
    stats,
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

// this convert all the key names of the object into an array
console.log(Object.keys(pokemon));
// this convert all the values of the object into an array
console.log(Object.values(pokemon));
// this cenvert all the key matching the values of the obejct into an array
console.log(Object.entries(pokemon));

/////////////////////////////////////////////////////////
// optional chaining (added in ES2020)
/////////////////////////////////////////////////////////
// adding after ?. after a call checks wether 'atk' and 'stats' exist, if not return undefine
console.log(pokemon.stats?.atk?.IV);
// works with methods too, designed to work with ?? (they were added to the language together)
console.log(pokemon.good?.() ?? "Method does not exist");

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

/////////////////////////////////////////////////////////
// for-of loop
/////////////////////////////////////////////////////////
// basic the "pokemon" is only the element in ash
for (const pokemon of ash) {
    console.log(pokemon);
}
// this allows the "pokemon" to be an array of the index and the element
// and we can destructure it
for (const [i, pokemon] of ash.entries()) {
    console.log(`${i + 1}. ${pokemon}`);
}

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
// SET (DATA STRUCTURE)(added in ES6)
/*******************************************************/
// a collection of unique values, so it can have no duplicate
// we can't retrieve single element from a set, but we can for-of loop it
const teamActive = new Set([
    "greninja",
    "greninja",
    "greninja",
    "greninja",
    "greninja",
    "greninja",
]); // need to an iterable that is passed in(usually an array)
console.log(teamActive);
// string is also an iterable
const gren = new Set("greninja");
console.log(gren);
// size of the set
console.log(gren.size);
// check if a set contain a certain element
console.log(gren.has(10));
// add elements to a set, when adding it won't automaticly break apart iterables
gren.add([10, 20]);
// delete element from a set
gren.delete("a");
console.log(gren);
// clear the set, delete everything
gren.clear();

// remove dup from array
const teamType = [
    "water",
    "dark",
    "fighting",
    "steel",
    "electric",
    "dragon",
    "ice",
    "dragon",
    "flying",
];
const teamTypeNoDup = [...new Set(teamType)];
console.log(teamType);
console.log(teamTypeNoDup);
//if we only want how many different elements there are
console.log(new Set(teamType).size);

/////////////////////////////////////////////////////////
// ES2025 new addons
/////////////////////////////////////////////////////////
const team1 = new Set(["greninja", "pikachu", "lucario"]);
const team2 = new Set(["pikachu", "lucario", "charizard"]);
// we can check for common elements between two sets
console.log(team1.intersection(team2));
// we can combine the two set
console.log(team1.union(team2));
// we can check the difference between the 2 sets, then put the none duplicate from the first set into a new set
console.log(team1.difference(team2));
console.log(team2.difference(team1));
// this one give the difference between 2 sets
console.log(team1.symmetricDifference(team2));
// check if 2 sets have common elements
console.log(team1.isDisjointFrom(team2));
// output a boolean showing if team1 is the subset of team2 (team2 contains team1)
console.log(team1.isSubsetOf(team2));
// output a boolean showing if team1 contains team2
console.log(team1.isSupersetOf(team2));

/*******************************************************/
// MAP (DATA STRUCTURE) (added in ES6)
// it is still keys matches with values
// but the key can be any data type
/*******************************************************/
// create a map
const question = new Map([
    [1, "java"],
    [2, "C++"],
    [3, "javascript"],
]);
const pokemonType = new Map();
// the .set() adds new key and value to the map and also return the map
pokemonType.set("name", "pokemon");
pokemonType.set(10, 100);
console.log(pokemonType.set([10, 10], new Set("greninja")));
// can't set the same key multiple times
console.log(
    pokemonType
        .set(20, 20)
        .set(30, 10)
        .set(40, 10)
        .set(50, 10)
        .set(60, 10)
        .set(70, 10)
        .set(80, 10)
);
// how to get a value
console.log(pokemonType.get(20));
// this would give undefine because when objects like arrays are stored the one the set and this one in get are store as 2 different arrays, so even though their values match, they themselves are different, so when get is called, it would return undefine, because their memory address are different.
console.log(pokemonType.get([10, 10]));
// delete an element from the map
pokemonType.delete(20);
console.log(pokemonType);
// get the size of the map
console.log(pokemonType.size);
// clear the map
pokemonType.clear();

// convert objects to map
const objMap = new Map(Object.entries(pokemon));
console.log(objMap);

// for loop map
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(value);
    }
}

// convert map to array, same is .entries()
console.log([...question]);
// convert only the value
console.log([...question.values()]);
// convert only the key
console.log([...question.keys()]);

/*******************************************************/
// NUMBER OPERATIONS
/*******************************************************/
// in javacript numbers are always stored as decimals
console.log(23 === 23.0);
// because everything is stored in binary, so things like this breaks
console.log(0.1 + 0.2);

// convert string to number
// the normal way
console.log(Number("23"));
// shortcut, type coercion
console.log(+"23");

// parsing
// it can cut off everything in the back, but if there is anything(white space doesn't count) in front of the letter it breaks
// should add the 10 in the back to prevent some bugs
// this only works with integer
console.log(Number.parseInt(" 1.5 goo morn hi", 10));
console.log(Number.parseInt("i1.5 goo morn h", 10));
// this works with decimal and integers
console.log(Number.parseFloat("1 goo morn hi", 10));
console.log(Number.parseFloat("1.5 goo morn h", 10));

// check if the argument is NaN
console.log(Number.isNaN(23));
// check if the argument is a number
console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(23));
// check if the argument is an integer
console.log(Number.isInteger(2.5));

/////////////////////////////////////////////////////////
// Math (only with Number not BigInt)
/////////////////////////////////////////////////////////
// square root
console.log(Math.sqrt(4));
console.log(4 ** (1 / 2));
// nth root
console.log(8 ** (1 / 3));
// max value
console.log(Math.max(2, "4"));
// min value
console.log(Math.min(2, "4"));
// pi: π
console.log(Math.PI);
// random number
// between 0, inclusive, and 1, exclusive
console.log(Math.random());
// between 1 and 5
console.log(Math.trunc(Math.random() * 5) + 1);
// between any two number, inclusive
const random = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min;
console.log(random(-5, -1));
/////////////////////////////////////////////////////////
// rounding numbers
// round the number
console.log(Math.round(2.5));
// round up the number
console.log(Math.ceil(2.5));
// these two does the same for positive number....
// but negative ceil() and trunc() will be the same
// round down the number
console.log(Math.floor(2.5));
// cut off everything after the decimal points
console.log(Math.trunc(2.5));
// rounding to a decimal point, n digit after the decimal place: .toFixed(n)
console.log((2.7).toFixed(3));

// remainder operator
console.log(3 % 2);

// added in ES2021
// numeric separator, have to be between 2 numbers
// for human reading only, no meaning
const numSep = 10_000_000_000;

/*******************************************************/
// DATE
/*******************************************************/
// create a date
const date = new Date();
console.log(date);
// string we create ourselves can be unreliable
// but the ones javascript create itself works fine
console.log(new Date("2019-11-18T21:31:17.178Z"));
// we can also pass in the number represening the date and time
//                   year  m-1 dd  h   min second
console.log(new Date(2037, 11, 10, 15, 23, 65));
// javascript will automatically correct the overflow, like the 65 seconds
// we can also have a single value in Date(), which means it will return how many ms after Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
console.log(new Date(0));
console.log(new Date(-2000));
console.log(new Date(2000));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// modify a date
console.log(date.getFullYear());
console.log(date.getMonth());
// this is the day
console.log(date.getDate());
// not the day but the day of the week
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
// convert date to string
console.log(date.toISOString());
// time stamp: get how many ms has passed after Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
console.log(date.getTime());
// current time stamp
console.log(Date.now());

// the .set...()
// this is the same as the .get...()
// this give us the ability to modify the 6 numbers

// calculation
const daysPassed = (start, end) => Math.round((end - start) / 1000 / 60 / 60 / 24);
console.log(+new Date(2020, 4, 10), +new Date(2020, 4, 20));
console.log(daysPassed(new Date(2020, 4, 10), new Date(2020, 4, 20)));

/*******************************************************/
// INTERNATIONALIZATION API
/*******************************************************/
// provide support for different regions of the world
/////////////////////////////////////////////////////////
// modify the date
console.log(new Intl.DateTimeFormat("en-GB").format(new Date()));
// we can change things with an external object
let options = {
    year: "numeric", // also have 2-digit
    // month: 'numeric',    1 to 12
    month: "long", //  January to December
    // month: '2-digit',    similar to numeric, but only in 2 digit
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};
// usually get those setting from the user browser
const locale = navigator.language;
console.log(new Intl.DateTimeFormat(locale, options).format(new Date()));
/////////////////////////////////////////////////////////
// modify the number
const numss = 10242342.2152353;
// we have a lot of options, check MDN
options = {
    style: "unit",
    unit: "mile-per-hour",
};
console.log(new Intl.NumberFormat("en-GB", options).format(numss));
console.log(new Intl.NumberFormat("de-DE", options).format(numss));
console.log(new Intl.NumberFormat("ar-SY", options).format(numss));
console.log(new Intl.NumberFormat(locale, options).format(numss));

/*******************************************************/
// TIMER
/*******************************************************/
// this timer don't pause the program, it just need counting the time in the background
// this is possible through asynchronous JavaScript
// timer (the second argument is in ms, so 1000 is 10 seconds)
const testTimer = setTimeout(
    function (user) {
        console.log("hi " + user);
    },
    1000,
    "Ash"
);
// this is how we can stop the timer
if (true) clearTimeout(testTimer);

// works the same as setTimeout, but it will keep running the function every 1000ms (1 second)
const clock = setInterval(
    () =>
        console.log(
            new Intl.DateTimeFormat(locale, {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }).format(new Date())
        ),
    1000
);

setTimeout(() => clearInterval(clock), 10000);

/*******************************************************/
// OOP
// Prototypal Inheritance
/*******************************************************/
/*
Prototype
    In javascript each object is linked to a prototype
    unlike the normal inheritance, the objects are delegating their methods to the prototype
how to Create:
    1. through constructor functions
    2. use ES6 classes
        they are not real classes, they are just constructor functions with a new look
    3. Object.create();
        not really used
*/
/////////////////////////////////////////////////////////
// constructor functions
/////////////////////////////////////////////////////////
// the function is always captitalized
// arrow function won't work we need "this"
const Pokemon = function (name, types) {
    // instance properties
    this.name = name;
    this.types = types;
    // instance methods
    // NEVER do this, bad practice
    // there is are too many instance there are too many copy of this function
    // this.calcType = function () {
    //     console.log(types.length);
    // }
};
// when we call we call it with "new"
const greninjaC = new Pokemon("greninja", ["water", "dark"]);
console.log(greninjaC);
const lucarioC = new Pokemon("lucario", ["fighting", "steel"]);
console.log(lucarioC);
// new does this
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
//      .__proto__ = [constructure].prototype
// 4. function automatically return {}

// check if a variable is an instance of a constructor function
console.log(greninja instanceof Pokemon);
console.log(greninjaC instanceof Pokemon);

// Prototype, this way there are only one copy of the method
Pokemon.prototype.calcType = function () {
    console.log(this.types.length);
};

greninjaC.calcType();
console.log(greninjaC.__proto__);
console.log(greninjaC.__proto__ === Pokemon.prototype);
console.log(Pokemon.prototype.isPrototypeOf(greninjaC));

Pokemon.prototype.type = "Dual Type";
console.log(greninjaC.type);
// check if the property is in the objects itself(true) or in the prototype(false)
console.log(greninjaC.hasOwnProperty("type"));
console.log(greninjaC.hasOwnProperty("types"));

// Prototype Chain
console.log(greninjaC.__proto__);
console.log(greninjaC.__proto__.__proto__);
console.log(greninjaC.__proto__.__proto__.__proto__);

// Array Prototype
console.log(ash.__proto__);
console.log(ash.__proto__ === Array.prototype);
// with this we can add many new methods we want to the arrays
// usually don't do this
// if hte next version all the same method, then everything breaks
// if there are multiple developer adding the same methods to the Array, things get messy
Array.prototype.unique = function () {
    return [...new Set(this)];
};

// Static Methods, not inherited on the constructor can call
Pokemon.team = function () {
    console.log("?????");
};
Pokemon.team();

/////////////////////////////////////////////////////////
// ES6 classes
/////////////////////////////////////////////////////////
// 1. Classes are not hoisted, can't access before declarition
// 2. Classes are first-class citizens
// 3. Classes are always executed in strict mode, even if the file is not in strict mode
// class declaration, there is also the experision form the same as functions
class PokemonCl {
    // this is still the constructor function
    constructor(name, types) {
        this.name = name;
        this.types = types;
    }
    // Instance methods
    // this is the prototype
    calcType() {
        console.log(this.types.length);
    }

    // we need these get and set to change a variable already in the constructor, or we get error
    // set name
    set name(nam) {
        if (nam.includes(" ")) {
            alert("no space");
        } else {
            this._name = nam;
        }
    }
    // this prevent the constructer and the set name trying to change the variable at the same time
    get name() {
        return this._name;
    }

    // static methods
    static hi() {
        console.log("???????????");
    }
}
const lycanrocC = new PokemonCl("Lucanroc", "rock");
console.log(lycanrocC);

/////////////////////////////////////////////////////////
// Getter and Setter
/////////////////////////////////////////////////////////
// in object
const testings = {
    nums: [10, 102, 34, 4, 34, 32],
    get lastE() {
        return this.nums.at(-1);
    },
    set changeFirstEl(el) {
        this.nums[0] = el;
    },
};
console.log(testings.lastE);
testings.changeFirstEl = 100;
console.log(testings.nums);

/////////////////////////////////////////////////////////
// Object.create()
/////////////////////////////////////////////////////////
const TestProto = {
    hi() {
        console.log("hi");
    },

    init(name, hi) {
        this.name = name;
        this.hi = hi;
    },
};
const clp = Object.create(TestProto);
console.log(clp);
// not the best way
// clp.name = "fe";
// clp.time = "hi";
// the better way
clp.init("fe", "hi");
console.log(clp);

/////////////////////////////////////////////////////////
// inheritance between classes
/////////////////////////////////////////////////////////
//=======================================================
// with constructor functions
//=======================================================
const AshTeam = function (name, types, position) {
    // can't just call, we need to set "this" too, or "this" will be undefined
    Pokemon.call(this, name, types);
    this.position = position;
};
// this have to be done the prototype is empty or it will override everything in the prototype
// we need the Object.create() to link the prototypes and and make them the exact same
// which means we are adding like a way for AshTeam to reach Pokemon's prototype
AshTeam.prototype = Object.create(Pokemon.prototype);
// this set the constructor of the prototype to AshTeam, instead of Pokemon(which is the result of using Object.create)
AshTeam.prototype.constructor = AshTeam;
AshTeam.prototype.output = function () {
    console.log(this.name);
};
const greninjaIn = new AshTeam("Greninja", ["water", "dark", 1]);
greninjaIn.output();
console.log(greninjaIn);
//=======================================================
// with ES6 Classes
//=======================================================
class LikoTeam extends Pokemon {
    constructor(name, types, position) {
        super(name, types);
        this.position = position;
    }
}
const terapagos = new LikoTeam("Terapagos", "normal", 1);
console.log(terapagos);
//=======================================================
// with Object.create()
//=======================================================
const TestingProto = {
    hiii() {
        console.log("hi");
    },

    init(name, hii) {
        this.name = name;
        this.hi = hi;
    },
};
const ocip = Object.create(TestingProto);
ocip.init = function (name, hii, hihi) {
    TestingProto.init.call(this, name, hii);
    this.hihi = hihi;
};
const ob = Object.create(ocip);
ob.init("1", "1", "2");
ob.hiii();

/////////////////////////////////////////////////////////
// private classes and data encapsulation
// achieved through class fields(Added in ES2022)
// this rised the idea that javascript is moving away from prototype based language to a class based language like Java and C++
/////////////////////////////////////////////////////////
// these are like being declared in the constructor and not inherited to the prototype
// 1. Public Field
// 2. Private Field
// 3. Public Methods
// 4. Private Methods
// 5. Static counter parts
class BankAccount {
    // public fields, it will remain the same for any object created
    locale = navigator.language;
    bank = "Bankist";
    // private fields, same as public fields just can't be accessed from outside of the class
    #transactions = [];
    #pin;

    constructor(owner, pin, currency) {
        this.owner = owner;
        this.#pin = pin;
        this.currency = currency;
    }
    // public methods
    getTransactions() {
        return this.#transactions;
        // can't be chained because it already have "return", but can have it in the vary end
    }
    deposit(amount) {
        this.#transactions.push(amount);
        return this;
    }
    withdrawal(amount) {
        this.deposit(-amount);
        return this;
    }
    // private methods
    #freeMoney() {
        return true;
    }
    // static methods
    static #test() {
        console.log("TEST");
    }
}
const account1 = new BankAccount("greninja", "water", "USD");
console.log(account1);
// static methods
// BankAccount.test();
/////////////////////////////////////////////////////////
// QOL: methods chaining
/////////////////////////////////////////////////////////
// to archieve this we need to return the account1 in all the method
account1.deposit(10).deposit(100).deposit(100).withdrawal(200).deposit(30);
console.log(account1);

/*******************************************************/
// Geolocation API
/*******************************************************/
// this way to check if the navigator exist, so we don't get errors on old browsers
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (pos) {
            console.log(pos.coords);
            const { latitude, longitude } = pos.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        },
        function () {
            alert("can't find your location");
        }
    );
}
/////////////////////////////////////////////////////////
// Promisify
/////////////////////////////////////////////////////////
// the resolve will return the location into the promise
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
getPosition().then(pos => console.log(pos));

/*******************************************************/
// LocalStorage API
// it is not good, so only use for small things
// it have blocking
// we can access it on the application tab of the browser in the section LocalStorage
/*******************************************************/
// the first argument is the name of the item stored, the second one is the content
// they both have to be string, so JSON.stringify and change anything to a string
localStorage.setItem("pokemons", JSON.stringify(ash));
// get the data from the LocalStorage, JSON.parse will transform the from back to the original data types
console.log(JSON.parse(localStorage.getItem("pokemons")));
// this deletes the data from LocalStorage
localStorage.removeItem("pokemons");
// PROBLEM
// when when store and convert back the inheritence prototype chain will be deleted

/*******************************************************/
// PROMISE
/*******************************************************/
// create a new promise(executor function)
const lottery = new Promise(function (resolve, reject) {
    // this should return the future value of the promise
    if (Math.random() >= 0.5) {
        resolve("You won!");
    } else {
        reject("You lost");
    }
});

lottery.then(res => console.log(res)).catch(err => console.error(err));

// promisifying the timer
const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

wait(2)
    .then(() => {
        console.log("2 seconds ago");
        return wait(1);
    })
    .then(() => console.log("1 second ago"));

/*******************************************************/
// try catch
/*******************************************************/
try {
    const y = 0;
    let x = 1;
    y = x;
} catch (err) {
    console.error(err.message);
}

/*******************************************************/
// async await
/*******************************************************/
// by creating a async function, it will return a promise and not block the code
const asyncHI = async function () {
    try {
        const country = await fetch(
            "https://countries-api-836d.onrender.com/countries/name/Canada"
        );
        console.log(country);
        const data = await country.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
asyncHI();

/////////////////////////////////////////////////////////
// parallel promises
/////////////////////////////////////////////////////////
const multiCountry = async function (c1, c2, c3) {
    try {
        // these three country are not depended on each other why should they with for each other
        // const country1 = await fetch(
        //     `https://countries-api-836d.onrender.com/countries/name/${c1}`
        // );
        // const country2 = await fetch(
        //     `https://countries-api-836d.onrender.com/countries/name/${c2}`
        // );
        // const country3 = await fetch(
        //     `https://countries-api-836d.onrender.com/countries/name/${c3}`
        // );
        // make them load the same time
        // but if one promise break then all of them break
        const data = await Promise.all([
            fetch(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
            fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
            fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
        ]);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
multiCountry("Canada", "USA", "China");

/*******************************************************/
// Promise Combinators
/*******************************************************/
// Promise.all()
// this return an array of all the promises

// Promise.race()
(async function (c1, c2, c3) {
    // this return the first promise that is fulfilled(resolved or rejected)
    const data = await Promise.race([
        fetch(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
        fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
        fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);
    console.log(data);
})("Canada", "USA", "China");

// Promise.allSettled() (added in ES2020)
// this is the same as the Promise.all() but it will not stop then one promise is rejected

// Promise.any() (added in ES2021)
(async function (c1, c2, c3) {
    // return the first resolved promise, ignore the rejected ones
    const data = await Promise.any([
        Promise.reject("hi"),
        fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
        fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);
    console.log(data);
})("Canada", "USA", "China");

/*******************************************************/
// USEFUL THINGS
/*******************************************************/

console.log("=========================================");
aaaaaa = 10;
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
/////////////////////////////////////////////////////////
// Selecting elements
//=======================================================
// going down select child elements(no range limit)
// .querySelector and .querySelectorAll
//=======================================================
// this is how we can select all the elements in the html, just do document is not enough
console.log(document.documentElement);
// select the head
console.log(document.head);
// selectthe body
console.log(document.body);
// everything else we need querySelector
// document.querySelectorAll: this select all the elements with this class and store in a nodeList
// select a html element (get the text)
document.querySelector(".testing").textContent;
// get the content of the input field
document.querySelector(".test").value;
// change the content (do .value for input)
document.querySelector(".testing").textContent = "good morning :)";
// another wat to select elements, but only work is ID (a little bit faster)
document.getElementById("name");
// select all the buttons, this return a HTMLCollection, it will automaticly update when a button is remove or added, this is very different from a NodeList
document.getElementsByTagName("button");
// this also returns HTMLCollection, but it get the element by class name
document.getElementsByClassName("btn");
//=======================================================
// going down select child elements(only direct child)
// children
//=======================================================
// return everything html elements and texts
document.childNodes;
// return HTMLCollection of all the html elements
document.children;
// return the first child
document.firstElementChild;
// return the second child
document.lastElementChild;
//=======================================================
// going up select parent elements(only direct parents)
// parent
//=======================================================
const para = document.querySelector("p");
// select the parent
para.parentElement;
para.parentNode;
//=======================================================
// going up select parent elements(no range limit)
// closest
//=======================================================
// select the closest parent with class header
para.closest(".header");
//=======================================================
// going sideway select sibling elements(only direct siblings, javascript can only reach the direct siblings)
// so if we want to select all the sibling elements we need to go up to parents and select all the children
// sibling
//=======================================================
// select sibling elements next to para
para.previousElementSibling;
para.nextElementSibling;
// this can select anything, include random texts
para.previousSibling;
para.nextSibling;

/////////////////////////////////////////////////////////
// Creating and inserting elements
/*
this adds the block of code in the string to html, it also need a position to add the code
for the position: 
    "beforebegin"
    <[element]>
        "afterbegin"
        [things]
        "before end"
    </[element]>
    "afterend"
fill the black with [];
[html element].insertAdjacentHTML([position], [code]);
[element].insertAdjacentHTML("[position]", [the html code in a string])
*/
// or we can create a DOM element, then modify it and add it to the DOM
// create
const message = document.createElement("div");
// modify
message.classList.add("hi");
message.textContent = "good morning";
// add to the DOM
/*
    prepend: the first element in the selected DOM
    append: the second element in the selected DOM
    before: the element before the selected DOM
    after: the element right after the selected DOM
*/
// this add the "message" as the first element in the DOM element selected
document.body.prepend(message);
// this add the "message" as the last element in the DOM element selected
// the secomd one will over ride the first, which means message can only be added once
document.body.append(message);
// to add it multiple times, we need to clone the DOM element
document.body.prepend(message.cloneNode(true));

// removing the DOM element
document.body.addEventListener("click", function () {
    // the old way
    // message.parentElement.removeChild(message);
    // the new way
    message.remove();
});

/////////////////////////////////////////////////////////
// styles
// we can access any inline style in html and any style we add with this will be stored as inline styles
console.log(document.body.style.backgroundColor);
// we can get all the styles of the element with this, no matter where it is defined
console.log(getComputedStyle(document.body));
// usually just use this to get a style
console.log(getComputedStyle(document.body).height);
// another way to change the style is with this
// the benefit of this is we can change the custom variables in css too
document.documentElement.style.setProperty("color", "red");

/////////////////////////////////////////////////////////
// attributes
// we can also access the attributes of HTML tags
console.log(document.querySelector("input").name);
console.log(document.querySelector("input").type);
console.log(document.querySelector("script").src);
console.log(document.querySelector("p").className);
// to get non-standard attributes
console.log(document.querySelector("input").pokemon);
console.log(document.querySelector("input").getAttribute("pokemon"));
// we can also set
document.querySelector("p").setAttribute("pokemon", "lucario");
// there are difference between these two, src and href
// this is how it is accessed
console.log(document.querySelector("script").src);
// this is how it is written in the code
console.log(document.querySelector("script").getAttribute("src"));

// Data attributes
// these attributes start with the name data
// these attrubutes have its information all stored in dataset

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

/////////////////////////////////////////////////////////
// location and size
// the location of the section 1
const s1coords = section1.getBoundingClientRect();
// output the current location of the window
console.log(window.scrollX, window.scrollY);
// size of the window
console.log(document.documentElement.clientHeight, document.documentElement.clientHeight);

// scroll to section
// old way
// the location of the section 1
// const s1coords = section1.getBoundingClientRect();
// window.scrollTo({
//     left: s1coords.left + window.scrollX,
//     top: s1coords.top + window.scrollY,
//     behavior: "smooth",
// });
// new way
section1.scrollIntoView({ behavior: "smooth" });

/////////////////////////////////////////////////////////
// Event listen

// propagation
/**
 * NOT ALL EVENTS HAVE THE CAPTURE AND BUBBLE PHASES
 * this is important because when the event pass through the parent elements it is as if the event is happening on them as well
 * so if there is event listeners on the parent elements the same action will be executed multiple times
 * when the event is traveling it only pass through the parent elements
 * capturing phase:
 *      an event is generated in the root(document)
 *      then passed through each level the of html until it reaches the element with the action listener
 * target phase:
 *      the EventListener waits for the action to happened
 *      then execute the attached function
 * bubbling phase:
 *      the document go from the target back to the root(document) of the file
 * (htb this make sense, when an action is performed on the element it is also performed on the parents elements because the parent elements contain the child elements)
 */

/**
 * for listening to event, everytime an event happen javascript generate an object with the info
 * The listeners only care about the bubbling phase so even if in capture phase events are passing through, they don't care
 * Even though no one really use this anyone but we can make EventListeners not listen during the bubbling phase and listen in the capturing phase by doing .addEventListener([event], [function], true);
 *
 * check MDN for the full list
 * mouseenter: when the cursor is hover over the element
 * != mouseleave
 * mouseover: same thing as mouseenter just it bubbles
 * != mouseout
 * click: when the element is clicked
 * keyup: when the key is left go
 * keydown: when the key is pressed (once)
 * keypress: when the key is pressed (continuous)
 * load: when the image is loaded
 */
// this make sure that if the element is clicked this excute the function closeModal
// if the button is in a form, it automaticly reloads
btnCloseModal.addEventListener("click", closeModal);
// this listens to wether the "escape" key is pressed
const checkEscape = function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
    // this outputs the target of the event, it doesn't have to where this event listener is attached to, it can be its child elements passing the event through propagation
    console.log(e.target);
    // this will be returning the current target, which is probobly where the event listener is attached to
    console.log(e.currentTarget);
    // we can also stop the propagation, usually shoudn't but just in case
    // this way tge parents elements won't recive the event
    e.stopPropagation();
};
document.addEventListener("keydown", checkEscape);

// EventListener is better
//      we can add multiple functions
//      we can remove the listener
// because we need to call the function again to remove it, we have to export it to a variable
document.removeEventListener("keydown", checkEscape);
// for listening to any events, we can do .on[event] (not used much any more replaced by EventListener)
modal.onmouseenter = function () {
    console.log("hi");
};

// we shouldn't be using this!!
// doing inline event listening in HTML
// <h1 onclick="console.log("HI")>

/////////////////////////////////////////////////////////
// Intersection Observer API
// create the observer
const obsOption = {
    // the element the target is intersecting (null is the viewport)
    root: null,
    // this is how many percent of the window is intersecting
    threshold: 0.1,
};
// this function will be called everytime the target selected matches the root and threshold set in the option
const obsFunction = function (entries, observer) {
    entries.forEach(entry => console.log(entries));
};
const observer = new IntersectionObserver(obsFunction, obsOption);
observer.observe(document.querySelector("p"));

// Intersection Observers and be used to archieve lazy loading image, which is a way to improve the web's performance by loading a vary low quality image and then replace it with a better one when needed, this way when the image is not needed, it will not effect the performance of the website too much
