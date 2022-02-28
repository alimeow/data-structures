var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  this.storage = {};
=======
  this.count = 0;
  this.storage = {};

};

Stack.prototype.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    var copy = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return copy;
  }

};

Stack.prototype.size = function () {
  return this.count;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
};

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function() {
  var a = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return a;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

<<<<<<< HEAD
// var newStack = new Stack();
new Stack();
=======
var instance = new Stack ();
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
