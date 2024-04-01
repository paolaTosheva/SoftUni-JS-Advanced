let vehicle = {
  countWheels() {
    return this.wheels;
  },
  soundEffect() {
    return this.sound;
  },
};
let car = {
  wheels: 4,
  sound: "broom-broom",
};
Object.setPrototypeOf(car, vehicle);

let motorbike = {
  wheels: 2,
  sound: "vroom-vroom",
};
Object.setPrototypeOf(motorbike, vehicle);

let truck = {
  wheels: 18,
  sound: "sound of destruction",
};
Object.setPrototypeOf(truck, vehicle);

const { expect } = require("chai");
describe("prototypes", () => {
  it("should print values for car", () => {
    expect(car.countWheels()).to.equal(car.wheels);
    expect(car.soundEffect()).to.equal(car.sound);
  });
  it("should print values for motorbike", () => {
    expect(motorbike.countWheels()).to.equal(motorbike.wheels);
    expect(motorbike.soundEffect()).to.equal(motorbike.sound);
  });
  it("should print print vlaues for truck", () => {
    expect(truck.countWheels()).to.equal(truck.wheels);
    expect(truck.soundEffect()).to.equal(truck.sound);
  });
});
