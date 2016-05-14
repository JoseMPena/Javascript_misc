var exampleArray = [2, -5, 10, 5, 4, -10, 0];

var process = function(array) {
    var pairs = [];
    for (x = 0; x <= array.length; x++) {
        for (y = x; y < array.length; y++) {
            if ((array[x] + array[y]) === 0) {
                pairs.push(array[x] + "," + array[y]);
            }
        }
    }
    return pairs;
};

var result = process(exampleArray);
console.log(result);
