"use script";
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
class EVCl extends CarCl {
    // 2. Make the 'charge' property private
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    // 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
    chargeBatttery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`
        );
        return this;
    }
}
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EVCl("Rivian", 120, 23);
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .brake()
    .brake()
    .chargeBatttery(90)
    .accelerate()
    .accelerate()
    .accelerate();
