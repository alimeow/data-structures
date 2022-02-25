var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var n = 0;
  // var length = Object.keys(storage).length;  // declaire it wont work?

  someInstance.enqueue = function(value) {
    storage[n] = value;
    n += 1;
  };

  someInstance.dequeue = function() {
    var recentDel = storage[n - Object.keys(storage).length];
    delete storage[n - Object.keys(storage).length];
    return recentDel;
  };

  someInstance.size = function() {
    return Object.values(storage).length;
    // return length;    //the line won't be the same as stating the whole key length
  };

  return someInstance;
};
