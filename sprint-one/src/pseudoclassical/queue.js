var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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