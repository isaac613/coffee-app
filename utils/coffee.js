const fs = require("fs");

const loadCoffees = () => {
  try {
    const dataBuffer = fs.readFileSync("src/coffee.json");
    console.log(dataBuffer);
    const coffeeJson = dataBuffer.toString();
    console.log(coffeeJson);
    return JSON.parse(coffeeJson);
  } catch (error) {
    return [];
  }
};

const saveCoffees = (allCoffees) => {
  console.log(allCoffees);
  const coffeeJson = JSON.stringify(allCoffees);
  console.log(coffeeJson);
  fs.writeFileSync("src/coffee.json", coffeeJson);
};

const addCoffee = (myCoffee) => {
  const allCoffees = loadCoffees();
  console.log(allCoffees);
  allCoffees.push({ order: myCoffee });

  saveCoffees(allCoffees);
  console.log(saveCoffees);
};

const listCoffee = () => {
  const allCoffees = loadCoffees();

  allCoffees.map((coffee) => {
    console.log(coffee);
  });
};

const removeCoffee = (coffeeToDelete) => {
  const allCoffees = loadCoffees();

  const coffeesToKeep = allCoffees.filter((coffee) => {
    return coffee.order != coffeeToDelete;
  });
  saveNotes(coffeesToKeep);
};
module.exports = {
  addCoffee,
  listCoffee,
  removeCoffee,
};
