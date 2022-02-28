var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var newStack = Object.create(stackMethods);
  newStack['storage'] = {};
  return newStack;
=======
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.count = 0;
  return instance;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
};

var stackMethods = {};

<<<<<<< HEAD
stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function(value) {
  var a = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return a;
};

stackMethods.size = function() {
  return Object.keys(this['storage']).length;
=======
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

>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
};

stackMethods.size = function () {
  return this.count;
};