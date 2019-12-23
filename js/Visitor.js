// ------- Elements -------
var Employee = function (name, salary, vacation) {
  var self = this;
      
  this.accept = function (visitor) {
      visitor.visit(self);
  };

  this.getName = function () {
      return name;
  };

  this.getSalary = function () {
      return salary;
  };

  this.setSalary = function (sal) {
      salary = sal;
  };

  this.getVacation = function () {
      return vacation;
  };

  this.setVacation = function (vac) {
      vacation = vac;
  };
};
// ------- Elements END -------

// ------- Visitors -------
var ExtraSalary = function () {
  this.visit = function (emp) {
      emp.setSalary(emp.getSalary() * 1.1);
  };
};

var ExtraVacation = function () {
  this.visit = function (emp) {
      emp.setVacation(emp.getVacation() + 2);
  };
};
// ------- Visitors END -------

// log helper

var log = (function() {
  var log = "";

  return {
      add: function(msg) { log += msg + "\n"; },
      show: function() { alert(log); log = ""; }
  }
})();

function run() {

  // ------- ObjectStructure -------
  var employees = [
      new Employee("John", 10000, 10),
      new Employee("Mary", 20000, 21),
      new Employee("Boss", 250000, 51)
  ];
  // ------- ObjectStructure END -------

  var visitorSalary = new ExtraSalary();
  var visitorVacation = new ExtraVacation();
      
  for (var i = 0, len = employees.length; i < len; i++) {
      var emp = employees[i];
          
      emp.accept(visitorSalary);
      emp.accept(visitorVacation);
      log.add(emp.getName() + ": $" + emp.getSalary() +
          " and " + emp.getVacation() + " vacation days");
  }

  log.show();
}

run();