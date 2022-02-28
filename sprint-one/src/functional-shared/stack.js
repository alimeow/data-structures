var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  _.extend(instance, stackMethods);
  instance.storage = {};
  instance.count = 0;


  return instance;
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var copy = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return copy;
  }

};

stackMethods.size = function () {
  return this.count;
};

