class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
    this.storage = {};
    this.len = 0;
=======
    this.count = 0;
    this.storage = {};
    this.first = 1;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
  }
  enqueue (value) {
    this.count++;
    this.storage[this.count] = value;
  }
  dequeue () {
    var copy = this.storage[this.first];
    delete this.storage[this.first];
    this.first += 1;
    return copy;

  }
  size () {
    var countOfStorage = 0;
    for (var key in this.storage) {
      countOfStorage++;
    }

<<<<<<< HEAD
  enqueue(value) {
    this.storage[this.len] = value;
    this.len += 1;
  }

  dequeue() {
    let a = this.storage[this.len - Object.keys(this.storage).length];
    delete this.storage[this.len - Object.keys(this.storage).length];
    return a;
  }

  size() {
    return Object.keys(this.storage).length;
=======
    return countOfStorage;
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
  }
}

var instance = new Queue();