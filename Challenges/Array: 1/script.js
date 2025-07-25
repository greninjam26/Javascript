"use strict";
/**
 Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
 */
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
const checkDogs = function (dogsJulia, dogsKate) {
    // 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    const dogsJuliaC = dogsJulia.slice(1, -2);
    console.log(dogsJuliaC);
    // 2. Create an array with both Julia's (corrected) and Kate's data
    const dogsAll = [...dogsJuliaC, ...dogsKate];
    console.log(dogsAll);
    // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 🐶 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")
    dogsAll.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i+1} 🐶 is an adult, and is ${dog} years old`);
        }else {
            console.log(`Dog number ${i+1} is still a puppy `);
        }
    });
};
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);