
// ------- Context -------
var TrafficLight = function () {
  var count = 0;
  var currentState = new Red(this);

  this.change = function (state) {
      // limits number of changes
      if (count++ >= 10) {
        console.log('programm ends');
        return;
      }
      currentState = state;
      currentState.go();
  };

  this.start = function () {
      currentState.go();
  };
}
// ------- Context END -------



// ------- State -------
var Red = function (light) {
  this.light = light;

  this.go = function () {
      console.log("Red --> for 1 minute");
      setTimeout(function() {light.change(new Green(light))}, 1000);
  }
};

var Yellow = function (light) {
  this.light = light;

  this.go = function () {
    console.log("Yellow --> for 10 seconds");
    setTimeout(function() {light.change(new Red(light))}, 200);
  }
};

var Green = function (light) {
  this.light = light;

  this.go = function () {
    console.log("Green --> for 1 minute");
    setTimeout(function() {light.change(new Yellow(light))}, 1000);
  }
};
// ------- State END -------


function run() {
  var light = new TrafficLight();
  light.start();
}

run();