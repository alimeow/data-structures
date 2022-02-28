var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {

    count++;
    storage[count] = value;
  };

  //var storage =  {2 : b, 3 : c}  = a fisrt = 2

  someInstance.dequeue = function() {
    // get the element out of the strage with key of first
    var copy = storage[first];
    // delete the element from stroge
    delete storage[first];
    // first to point to a new key
    first += 1;
    // return the element which was taken out
    return copy;

  };

  someInstance.size = function() {
    var countOfStorage = 0;
    for (var key in storage) {
      countOfStorage++;
    }

    return countOfStorage;
  };

  return someInstance;
};
