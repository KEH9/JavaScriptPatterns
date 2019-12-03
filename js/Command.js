"use strict";

// ------- The Invoker function -------
class Switch {
  constructor() {
    this._commands = [];
  }

  storeAndExecute(command) {
    this._commands.push(command);
    console.log('stored: ' + JSON.stringify(this._commands, null, 4));
    command.execute(); //Command
  }
}
// ------- End of the Invoker function -------




// ------- The Receiver function -------
class Light {
  turnOn() { console.log('turn on') }
  turnOff() { console.log('turn off') }
}
// ------- End of the Receiver function -------




// ------- The ConcreteCommands function -------
class FlipDownCommand {
  constructor(light) {
    this._light = light;
  }

  execute() {
    this._light.turnOff();
  }
}

class FlipUpCommand {
  constructor(light) {
    this._light = light;
  }

  execute() {
    this._light.turnOn();
  }
}
// ------- End of the ConcreteCommands function -------



// ------- The Client function -------

var light = new Light();
var switchUp = new FlipUpCommand(light);
var switchDown = new FlipDownCommand(light);
var s = new Switch();

s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);
s.storeAndExecute(switchDown);
s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);
