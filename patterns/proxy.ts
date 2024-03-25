// Proxy (Structural)
// Fancy word for "substitue".
// Replace target object with a proxy.
// Examples: Vue's reactivity system.

const original = { name: "jeff" };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log("tracking: ", key);
    return target[key];
  },
  set(target, key, value) {
    console.log("updating: ", key);
    return Reflect.set(target, key, value);
  },
});

reactive.name;
reactive.name = "bob";
