const drink = { color: 'brown', carbonated: true, sugar: 40 };

// this is what makes a tuple a tuple. A strict order of elements in an array like object
// type alias;
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];

let sprite: Drink;
sprite[0] = 'clear';
