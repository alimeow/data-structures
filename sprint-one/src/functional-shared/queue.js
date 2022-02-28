var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  _.extend(instance, queueMethods);
  instance.count = 0;
  instance.first = 1;
  instance.storage = {};

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function () {
  var copy = this.storage[this.first];
  delete this.storage[this.first];
  this.first += 1;
  return copy;

};

queueMethods.size = function () {
  var countOfStorage = 0;
  for (var key in this.storage) {
    countOfStorage++;
  }

  return countOfStorage;
};