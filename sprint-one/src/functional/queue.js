var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value, index) {
    
    if(!index) {
      index = storageSize;
    }

    storage[index] = value;
    storageSize++;
  };

  someInstance.dequeue = function() {
    var dequeuedValue = storage[0];
    storageSize = Math.max(storageSize -= 1, 0);

    for(var i = 1; i <= storageSize && storageSize > 0; i++) {
      storage[i-1] = storage[i];
    }

    delete storage[storageSize + 1];
    return dequeuedValue;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
