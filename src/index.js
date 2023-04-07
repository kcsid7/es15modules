import foods from "./foods.js";
import { choice, remove } from "./helpers.js";


console.log("Hello World!")

console.log(foods);

const randF = choice(foods);

console.log(`I'd like one ${randF} please`);
console.log(`Here you go: ${randF}`);
console.log(`Delicious! May I have another ${randF}`);

const newFoods = remove(foods, randF);

console.log(`I'm sorry, we're all out. We only have these left:`);
console.log(`${newFoods}`);