//Interfaces + Classes === TYPESCRIPT_POWER > 9000;

interface Reportable {
  summary(): string;
}

const oldHondaCivic = {
  make: 'Honda',
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `The ${this.make} ${this.name}, produced in ${this.year} is${
      !this.broken ? ' not ' : ''
    } broken.`;
  },
};

const pepsi = {
  name: 'Pepsi',
  color: 'caramel',
  gramsOfSugar: 40,
  summary() {
    return `The drink ${this.name} has a color of ${this.color} and contains ${this.gramsOfSugar} grams of sugar.`;
  },
};

// really long ugly type annotation... an interface fixes this problem.
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`
//     The ${vehicle.name} made in ${vehicle.year} is ${
//     !vehicle.broken ? 'not ' : ''
//   }broken.
//   `);
// };

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldHondaCivic);
printSummary(pepsi);
