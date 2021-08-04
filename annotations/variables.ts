let apples: number = 5;
apples = 10;

let speed: string = 'fast';

let hasName: boolean = true;

const none: null = null;

// Built in objects

let now: Date = new Date();

let colors: string[] = ['red', '1', 'green', 'blue'];
let myNums: number[] = [0, 1, 2, 3];
let bools: boolean[] = [true, false, true, true, false];

// Classes
class Car {}

let newCar: Car = new Car();

// Object Literal
let point: { x: number; y: number } = { x: 10, y: 20 };

// Functions
const logNumber: (integer: number) => void = (integer: number) => {
  console.log(integer);
};

/// ALL of The Above declarations do not require a type annotation. Typescript will use type inference to make an educated guess at wht the type is.

// we use annotations in the following three examples:

// 1.) When a function returns type "any":
const jsonBlob = '{"x": 10,"y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(jsonBlob);
console.log(coordinates);

// 2.) When a variable is declared but not initialized.
let words = ['red', 'green', 'blue'];

let foundGreen: boolean;

for (let index = 0; index < words.length; index++) {
  if (words[index] === 'green') {
    foundGreen = true;
    console.log(foundGreen);
  }
}

// 3.) Whenever we have a variable who's type cant be easily inferred.
const myNumber = [-1, -10, -12, 13];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < myNumber.length; index++) {
  if (myNumber[index] > 0) {
    numberAboveZero = myNumber[index];
  }
}
