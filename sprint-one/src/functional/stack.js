/*
This code is written by Bryan Venable as a
re-creation of the work done at Hack Reactor

This code is written in functional instantiation style
*/
var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // A counter will be needed to keep track
  // of the numeric keys
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter ++;
  };

  someInstance.pop = function(){
    if(counter > 0){
      counter--;
      var temp = storage[counter];
      delete storage[counter];
      return temp;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
