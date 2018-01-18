
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.storageSize = 0;

};

stackMethods = {

  // Implement the methods below
  push: function(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  },

  pop: function() {
    var index = this.storageSize - 1;
    var returnValue = this.storage[index];
    delete this.storage[index];
    this.storageSize = Math.max(this.storageSize -= 1, 0);
    return returnValue;
  },

  size: function() {
    return this.storageSize;
  }
};

for(var key in stackMethods) {
  Stack.prototype[key] = stackMethods[key];
};




