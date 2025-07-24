"use strict";
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion. 
Your tasks:
 */

const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
    { weight: 18, curFood: 244, owners: ["Joe"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
if (
    dogSarah.recFood * 1.1 >= dogSarah.curFood &&
    dogSarah.recFood * 0.9 <= dogSarah.curFood
) {
    console.log("Eating an okay amount");
} else if (dogSarah.recFood * 1.1 < dogSarah.curFood) {
    console.log("Eating too much");
} else {
    console.log("Eating too little");
}
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
    .filter(dog => dog.recFood * 1.1 < dog.curFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
    .filter(dog => dog.recFood * 0.9 > dog.curFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.recFood === dog.curFood));
// utility
const checkOk = dog =>
    dog.recFood * 1.1 >= dog.curFood && dog.recFood * 0.9 <= dog.curFood;
// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
console.log(dogs.some(checkOk));
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const okDogs = dogs.filter(checkOk);
console.log(okDogs);
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
const sortedDogs = [...dogs];
sortedDogs.sort((dog1, dog2) => dog1.recFood - dog2.recFood);
console.log(sortedDogs);
