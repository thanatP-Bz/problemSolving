const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(dogSarah);

const dogEatMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

const dogEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(dogEatTooLittle);
console.log(dogEatMuch);
