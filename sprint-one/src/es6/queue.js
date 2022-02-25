class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.len = 0;
  }

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
  }
}
