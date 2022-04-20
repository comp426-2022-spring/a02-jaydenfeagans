// Import the coinFlip function from your coin.mjs file

import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT
const args = minimist(process.argv.slice(2));
const num = args.number || 1;

let flips = coinFlips(num);
let sum = countFlips(flips);

if(flips.length ==1) {

    if(sum.heads==0) {
        delete sum.heads;
    }

    if(sum.tails==0) {
        delete sum.tails;
    }

}

console.log(flips);
console.log(sum);