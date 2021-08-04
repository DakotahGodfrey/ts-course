const profile = {
  name: 'bob',
  age: 20,
  coords: {
    latitude: 20,
    longitude: 10,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { latitude, longitude },
}: { coords: { latitude: number; longitude: number } } = profile;
