var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var storageSize = 0;
  
  var someInstance = Object.create(queueMethods);

  someInstance.storageSize = storageSize;
  someInstance.storage = storage;

  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    
    this.storage[this.storageSize] = value;
    this.storageSize++;
  },

  dequeue: function() {
    var dequeuedValue = this.storage[0];
    this.storageSize = Math.max(this.storageSize -= 1, 0);

    for(var i = 1; i <= this.storageSize && this.storageSize > 0; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[this.storageSize + 1];
    return dequeuedValue;
  },

  size: function() {
    return this.storageSize;
  }

};