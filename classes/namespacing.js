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
    console.log("A dog has found a home!");
  };

  public_methods.reset = function() {
    cats = 15;
    rabbits = 12;
    dogs = 21;
    console.log("All animals back to the kennel :(");
  };

  return public_methods;
};

var kennel1 = new Kennel();
//Test Public methods are reachable from the outside
kennel1.adoptRabbit();
kennel1.adoptCat();
kennel1.adoptDog();
kennel1.reset();

//Test non-public attributes are not reachable from the outside
console.log(kennel1.cats); //return undefined
