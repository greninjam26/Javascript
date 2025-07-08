const country = "Canada";
const continent = "North America";
let population = 10000;
const isIsland = false;
let language;
language = "English";

let curPopulation = population / 2;
curPopulation++;
console.log(curPopulation);

if (population > 6000000) {
    console.log("Yes");
} else {
    console.log("No");
}

if (population > 33000000) {
    console.log("Yes");
} else {
    console.log("No");
}

const description =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " people speaks " +
    language;

console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population} people speaks ${language}`;

console.log(descriptionNew)
