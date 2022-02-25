var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

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