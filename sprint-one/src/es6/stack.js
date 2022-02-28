class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
=======
    this.count = 0;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
    this.storage = {};
  }
  push (value) {
    this.count++;
    this.storage[this.count] = value;
  }
  pop () {
    if (this.count > 0) {
      var copy = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return copy;
    }
  }
  size () {
    return this.count;
  }

}

<<<<<<< HEAD
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
=======
var instance = new Stack();
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
