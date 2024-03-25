// Factory (Creational)
// Instead of using a new keyword to instantiate and object you use a function or method to do it for you.
// Use case: Cross platform app - Conditional checking to determine which button to show.

class IOSButton {}
class AndroidButton {}

const os = "ios";

// Without Factory
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    return os === "ios" ? new IOSButton() : new AndroidButton();
  }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
