var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var newStack = {};
  newStack['storage'] = {};
  _.extend(newStack, queueMethods);
  newStack.len = 0;
  return newStack;
=======
  var instance = {};
  _.extend(instance, queueMethods);
  instance.count = 0;
  instance.first = 1;
  instance.storage = {};

  return instance;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
};

var queueMethods = {};

<<<<<<< HEAD
queueMethods.enqueue = function(value) {
  this.storage[this.len] = value;
  this.len += 1;
};

queueMethods.dequeue = function() {
  var a = this.storage[this.len - Object.keys(this.storage).length];
  delete this.storage[this.len - Object.keys(this.storage).length];
  return a;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
=======
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
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
