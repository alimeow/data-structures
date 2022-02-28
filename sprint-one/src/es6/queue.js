class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
    this.first = 1;
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

    return countOfStorage;
  }
}

var instance = new Queue();