//Chain of responsibility design pattern


//Use strategyPipeline.handleRequest(request)
//to send the request to be handled along the
//chain-of-responsibility
var strategyPipeline = {
  handleRequest: function(request){
    var strategy1 = new Strategy1();
    var strategy2 = new Strategy2();
    var strategy3 = new Strategy3();
    var strategy4 = new Strategy4();

    strategy1.setNext(strategy2).setNext(strategy3).setNext(strategy4);
    strategy1.handleRequest(request);
  }
}


//Handler
var Handler = function(){
  this.next = {
    handleRequest: function(request){
      console.log('All strategies exhausted.');
    }
  }
} ;
Handler.prototype.setNext = function(next){
  this.next = next;
  return next;
}
Handler.prototype.handleRequest = function(request){};

//Strategy1
var Strategy1 = function(){};
Strategy1.prototype = new Handler();
Strategy1.prototype.handleRequest = function(request){
  console.log('Strategy1');
  if(request == 1){
    return ;
  }
  this.next.handleRequest(request);
}

//Strategy2
var Strategy2 = function(){};
Strategy2.prototype = new Handler();
Strategy2.prototype.handleRequest = function(request){
  console.log('Strategy2');
  if(request == 2){
    return ;
  }
  this.next.handleRequest(request);
}

//Strategy3
var Strategy3 = function(){};
Strategy3.prototype = new Handler();
Strategy3.prototype.handleRequest = function(request){
  console.log('Strategy3');
  if(request == 3){
    return ;
  }
  this.next.handleRequest(request);
}

//Strategy4
var Strategy4 = function(){};
Strategy4.prototype = new Handler();
Strategy4.prototype.handleRequest = function(request){
  console.log('Strategy4');
  if(request == 4){
    return ;
  }
  this.next.handleRequest(request);
}

strategyPipeline.handleRequest(10);