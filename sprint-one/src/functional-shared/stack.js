var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

// Implement the methods below
queueMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter ++;
};

queueMethods.pop = function(){
  if(this.counter > 0){
    this.counter--;
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    return temp;
  }
};

queueMethods.size = function(){
  return this.counter;
};
