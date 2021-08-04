class Vehicle {
  constructor(protected color: string) {}
  protected honk(): void {
    console.log('Beep Beep.');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }
  private drive(): void {
    console.log('Car go VROOM!');
  }
  public move(): void {
    this.drive();
    console.log('the car is ' + this.color);
    this.honk();
    this.drive();
  }
}

const car = new Car('red', 4);
car.move();
