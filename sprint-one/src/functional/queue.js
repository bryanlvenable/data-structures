/*
This code is written by Bryan Venable as a
re-creation of the work done at Hack Reactor

This code is written in functional instantiation style
*/
var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Counters will be needed to store values to numeric keys
  var topCount = 0;
  var bottomCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[topCount] = value;
    topCount++;
  };

  someInstance.dequeue = function(){
    if(topCount > bottomCount){
      var temp = storage[bottomCount];
      delete storage[bottomCount];
      bottomCount++;
      return temp;
    }
  };

  someInstance.size = function(){
    return topCount - bottomCount;
  };

  return someInstance;
};
