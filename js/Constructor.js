// ------- BASIC CONSTRUCTOR -------

function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

// and then open our browser console to view the 
// output of the toString() method being called on 
// these objects

console.log( '// ------- BASIC CONSTRUCTOR -------' );
console.log( civic.toString() );
console.log( mondeo.toString() );
console.log( '// ------- BASIC CONSTRUCTOR END -------' );

// ------- BASIC CONSTRUCTOR END -------




// ------- Constructors with Prototypes -------

function CarProt( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}

// Note here that we are using Object.prototype.newMethod rather than 
// Object.prototype so as to avoid redefining the prototype object
CarProt.prototype.showCar = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new CarProt( "Honda Civic", 2009, 20000 );
var mondeo = new CarProt( "Ford Mondeo", 2010, 5000 );

console.log( '// ------- Constructors with Prototypes -------' );
console.log( civic.showCar() );
console.log( mondeo.showCar() );
console.log( '// ------- Constructors with Prototypes END -------' );


// ------- Constructors with Prototypes END -------


