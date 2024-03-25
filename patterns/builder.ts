// Builder (Creational)
// Create object with methods instead of constructor.
// Examples: JQuery.

// bad example with constructor
class HotDog {
  constructor(
    public bun: string,
    public ketchup: boolean,
    public mostard: boolean,
    public kraut: boolean
  ) {}
}

new HotDog("wheat", false, true, true);

class HotDogWithBuilder {
  constructor(
    public bread: string,
    public ketchup: boolean = false,
    public mostard: boolean = false,
    public kraut: boolean = false
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }

  addMostard() {
    this.mostard = true;
    return this;
  }

  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDogWithBuilder("wheat");

myLunch.addKetchup().addKraut().addMostard();
