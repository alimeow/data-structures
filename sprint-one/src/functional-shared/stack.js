var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var newStack = {};

  newStack['storage'] = {};

  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
=======
  var instance = {};
  _.extend(instance, stackMethods);
  instance.storage = {};
  instance.count = 0;


  return instance;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
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

<<<<<<< HEAD
stackMethods.push = function(value) {
  return this.storage[Object.keys(this['storage']).length] = value;
};

stackMethods.pop = function() {
  var a = this.storage[Object.keys(this['storage']).length - 1];
  delete this.storage[Object.keys(this['storage']).length - 1];
  return a;
=======
};

stackMethods.size = function () {
  return this.count;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
};

stackMethods.size = function() {
  // debugger;
  return Object.keys(this['storage']).length;
};