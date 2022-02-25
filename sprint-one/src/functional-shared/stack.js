var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};

  newStack['storage'] = {};

  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  return this.storage[Object.keys(this['storage']).length] = value;
};

stackMethods.pop = function() {
  var a = this.storage[Object.keys(this['storage']).length - 1];
  delete this.storage[Object.keys(this['storage']).length - 1];
  return a;
};

stackMethods.size = function() {
  // debugger;
  return Object.keys(this['storage']).length;
};