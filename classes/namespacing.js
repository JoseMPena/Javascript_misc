var Kennel = function() {
  var cats = 15;
  var rabbits = 12;
  var dogs = 21;

  var public_methods = {};

  public_methods.adoptDog = function() {
    dogs--;
    console.log("A dog has found a home!");
  };

  public_methods.adoptCat = function() {
    cats--;
    console.log("A cat has found a home!");
  };

  public_methods.adoptRabbit = function() {
    rabbits--;
    console.log("A rabbit has found a home!");
  };

  public_methods.reset = function() {
    cats = 15;
    rabbits = 12;
    dogs = 21;
    console.log("All animals back to the kennel :(");
  };

  return public_methods;
};

var kennel = new Kennel();
//Test Public methods are reachable from the outside
kennel.adoptRabbit();
kennel.adoptCat();
kennel.adoptDog();
kennel.reset();

//Test non-public attributes are not reachable from the outside
console.log(kennel.cats); //return undefined
