// 2 Classes doing similar things;
class NumbersCollection {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class StringsCollection {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

// Can be simplified using a Generic Class

class Collection<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const strings = new Collection(['a', 'b', 'c', 1, 3, 4]);

// Generics with functions;

const printStrings = (arr: string[]): void => {
  arr.forEach((string) => {
    console.log(string);
  });
};

const printNums = (arr: number[]): void => {
  arr.forEach((num) => {
    console.log(num);
  });
};

function log<T>(arr: T[]): void {
  arr.forEach((el) => {
    console.log(el);
  });
}

log(['g']);

// Generic Constraints

class Car {
  print(): void {
    console.log('this is a car');
  }
}
class House {
  print(): void {
    console.log('this is a house');
  }
}

interface CanPrint {
  print(): void;
}

function printHousesOrCars<T extends CanPrint>(arr: T[]) {
  arr.forEach((el) => {
    el.print();
  });
}
