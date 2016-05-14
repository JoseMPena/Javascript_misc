var Average = function() {
  this.to_array = function(string) {
    return string.split(":");
  };

  this.get_average = function(array) {
    var sum = array.reduce(function(pre, actual){
      return parseInt(pre) + parseInt(actual);
    });
    return sum / array.length;
  };
};

average1 = new Average();
var array = average1.to_array('80:70:90:100');
console.log(average1.get_average(array));
