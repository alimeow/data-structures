var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(queueMethods);
  newStack['storage'] = {};
  newStack.len = 0;
  return newStack;
};

var queueMethods = {};

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