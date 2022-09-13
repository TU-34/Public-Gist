const readline = require('readline-sync');

const btc = readline.question("What is Bitcoin price today? ");
const usd = readline.question("How much $ do you have? ");

console.log("You can buy " + usd/btc);