const command = process.argv[2];
const yargs = require("yargs");
const { addCoffee, listCoffee, removeCoffee } = require("../utils/coffee.js");

console.log(process.argv);
console.log(yargs.argv);

/* if (process.argv[2] == "Isaac") {
  console.log("hey that's my name");
} else {
  console.log("That's not my name");
}
*/

if (command == "order") {
  console.log(" ordering a coffee...");
  addCoffee(yargs.argv.coffee);
} else if (command == "list") {
  console.log("listing Coffee Orders...");
  listCoffee();
} else if (command == "remove") {
  console.log("removing Coffee Order...");
  removeCoffee(yargs.argv.coffee);
} else {
  console.log("command not recognized");
}
