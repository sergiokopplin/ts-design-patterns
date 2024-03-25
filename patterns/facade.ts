// Facade (Structural)
// A simplified API to hide low level details in your code base.
// Use case: Create facade class that contain the low level systems as dependencies which then simplifies their operation.
// Examples: JQuery.

// facade

class PlumbingSystem {
  // low level access to plumbing system
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // low level access to electrical system
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();

    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.electrical.turnOff();
    this.plumbing.turnOff();
  }
}

// ugly details hidden
const client = new House();
client.turnOnSystems();
