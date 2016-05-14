var Decoder = function(array) {

  return function() {
    var message = '';
    array.forEach(function(word, idx) {
      message += word.charAt(idx % 5);
    });
    return message;
  };
};

var hidden_message = ["Jhung", "mOrtal","egSre","srgEfr"];
var words2 = [
 "January", "lacks", "caveats",
 "hazardous", "DOORS", "crying",
 "arrogantly", "climate", "proponent",
 "rebuttal"
];
var decoder = new Decoder(words2);
console.log(decoder());
