var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD

  this.storage = {};
  this.len = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.len] = value;
  this.len += 1;
};

Queue.prototype.dequeue = function() {
  let a = this.storage[this.len - Object.keys(this.storage).length];
  delete this.storage[this.len - Object.keys(this.storage).length];
  return a;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
=======
  this.count = 0;
  this.first = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function () {
  var copy = this.storage[this.first];
  delete this.storage[this.first];
  this.first += 1;
  return copy;

};

Queue.prototype.size = function () {
  var countOfStorage = 0;
  for (var key in this.storage) {
    countOfStorage++;
  }

  return countOfStorage;
};

var instance = new Queue ();
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
