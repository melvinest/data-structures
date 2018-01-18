class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }

  enqueue(value) {

    this.storage[this.storageSize] = value;
    this.storageSize++;
  }

  dequeue() {
    var dequeuedValue = this.storage[0];
    this.storageSize = Math.max(this.storageSize -= 1, 0);

    for(var i = 1; i <= this.storageSize && this.storageSize > 0; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[this.storageSize + 1];
    return dequeuedValue;
  }

  size() {
    return this.storageSize;
  }
}
