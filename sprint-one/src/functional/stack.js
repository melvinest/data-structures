var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageSize] = value;
    storageSize++;
  };

  someInstance.pop = function() {
    var index = storageSize - 1;
    var returnValue = storage[index];
    delete storage[index];
    storageSize = Math.max(storageSize -= 1, 0);
    return returnValue;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
