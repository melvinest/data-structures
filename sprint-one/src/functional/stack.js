var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storageSize++;
    storage[storageSize] = value;
  };

  someInstance.pop = function() {
    returnValue = storage[storageSize]
    delete storage[storageSize];
    storageSize = Math.max(storageSize -= 1, 0);
    return returnValue;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
