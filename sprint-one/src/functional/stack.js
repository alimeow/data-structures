var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
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
  };

  return someInstance;
};
