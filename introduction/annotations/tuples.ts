const drink = { color: 'brown', carbonated: true, sugar: 40 };

// this is what makes a tuple a tuple. A strict order of elements in an array like object
// type alias;
type Drink = [string, boolean, number];

const pepsiOne: Drink = ['brown', true, 40];

let sprite: Drink;
sprite[0] = 'clear';

// con of tuple not great for representing all types of data
const carSpecs: [number, number] = [400, 3354];

const carSpecsObject = {
  horsepower: 454,
  weightInLBS: 3354,
};
