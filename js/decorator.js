function Latte () {
  this.description = function () {return 'latte';};
  this.cost = function () {return 5;};
}

function sugar (coffee) {

  let oldDescription = coffee.description();

  coffee.description = function () {
    return (oldDescription + ' with sugar');
  }

  let oldCost = coffee.cost();
  coffee.cost = function () {
    return oldCost + 0.2;
  }


}

function milk (coffee) {

  let oldCost = coffee.cost();
  coffee.cost = function () {
    return oldCost + 0.5;
  }

  let oldDescription = coffee.description();
  coffee.description = function () {
    return (oldDescription + ' with milk');
  }

}

let newOrderPosition = new Latte();
sugar(newOrderPosition);
milk(newOrderPosition);


console.log(newOrderPosition.description() + ' price is ' + newOrderPosition.cost() + '$');

alert(newOrderPosition.description() + ' price is ' + newOrderPosition.cost() + '$');
