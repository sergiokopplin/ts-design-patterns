// Singleton (Creational)
// Object that can only be instantiated once.
// Use case: Settings

class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  // prevent new with private constructor
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    // ensure that only one object has been created
    return Settings.instance;
  }
}

// fail
// const settings = new Settings();

// success
const settings = Settings.getInstance();
console.log("🚀 ~ settings:", settings);

// same as global object
const settingsGlobal = {
  dark: "true",
};
console.log("🚀 ~ settingsGlobal:", settingsGlobal);
