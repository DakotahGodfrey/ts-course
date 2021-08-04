const carMakers = ['Ford', 'Toyota', 'Chevy', 'GM'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['camry'], ['camaro']];

const brand = carMakers[0];
const myCar = carsByMake.pop()[0];

carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// multiple types in arrays:

const importantDates: (Date | string)[] = [new Date(), '2030 - 10 - 12'];
importantDates.push('10 - 10 - 2030');
