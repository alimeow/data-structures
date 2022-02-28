var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 1;
  // Implement the methods below

  var n = 0;
  // var length = Object.keys(storage).length;  // declaire it wont work?

  someInstance.enqueue = function(value) {
<<<<<<< HEAD
    storage[n] = value;
    n += 1;
=======

    count++;
    storage[count] = value;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
  };

  //var storage =  {2 : b, 3 : c}  = a fisrt = 2

  someInstance.dequeue = function() {
<<<<<<< HEAD
    var recentDel = storage[n - Object.keys(storage).length];
    delete storage[n - Object.keys(storage).length];
    return recentDel;
  };

  someInstance.size = function() {
    return Object.values(storage).length;
    // return length;    //the line won't be the same as stating the whole key length
=======
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
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
  };

  return someInstance;
};
