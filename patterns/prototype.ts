// Prototype (Creational)
// Fancy word for "clone".
// Create clone object instead of extending object.

// class inheritance example
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
// that leads to complexity

// prototype
const zombie = {
  eatBrains() {
    return "yum";
  },
};

// clone
const chad = Object.create(zombie, { name: { value: "chad" } });

// the method still works
chad.eatBrains();

// also, you can extends functionality, which not recommended
Array.prototype.bad = function () {
  console.log("im bad");
};
