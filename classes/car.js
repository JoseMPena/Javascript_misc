var Car = function(model, noise){
  this.model = model;
  this.noise = noise;
  var weelsNumber = 4;

  this.makeNoise = function(){
    console.log(this.noise);
  };
};

var citroen = new Car("Xsara", "BROOOOOM");
citroen.makeNoise();
