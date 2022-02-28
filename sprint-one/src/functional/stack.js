var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
<<<<<<< HEAD
  var num = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[num] = value;
    num += 1;
  };

  someInstance.pop = function() {
    num -= 1;
    var recentDel = storage[num];
    delete storage[num];
    return recentDel;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
=======
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    if (count > 0) {
      var copy = storage[count];
      delete storage[count];
      count--;
      return copy;
    }
  };

  someInstance.size = function() {
    return count;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
  };

  return someInstance;
};
