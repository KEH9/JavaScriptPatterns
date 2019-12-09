var Person =  function( firstName , lastName ){

  this.firstName = firstName;
  this.lastName =  lastName;
  this.gender = "male";

};




// a new instance of Person can then easily be created as follows:
// var clark = new Person( "Clark" , "Kent" );
       
// Define a subclass constructor for for "Superhero":
var SuperHero = function( firstName, lastName , powers ){
    
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
    
    Person.call( this, firstName, lastName );

    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};

SuperHero.prototype = Object.create( Person.prototype );
var superman = new SuperHero( "Clark" ,"Kent" , ["flight","heat-vision"] );
console.log( superman ); 

// Outputs Person attributes as well as powers