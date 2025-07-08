/*

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

*/
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.76;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = false;
if (BMIMark > BMIJohn) {
    markHigherBMI = true;
}
console.log(markHigherBMI);