class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  //what's with the capitalization of function names
  push(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop() {
    var a = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return a;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

// new Stack()