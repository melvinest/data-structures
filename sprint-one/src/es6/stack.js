class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storageSize = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }

  pop(){
    var index = this.storageSize - 1;
    var returnValue = this.storage[index];
    delete this.storage[index];
    this.storageSize = Math.max(this.storageSize -= 1, 0);
    return returnValue;
  }

  size() {
    return this.storageSize;
  }
}
