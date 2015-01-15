var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};
someInstance.storage = {};
someInstance.topCount = 0;
someInstance.bottomCount = 0;
_.extend(someInstance, queueMethods);
return someInstance;
};

var queueMethods = {};

// Implement the methods below
queueMethods.enqueue = function(value){
  this.storage[this.topCount] = value;
  this.topCount++;
};

queueMethods.dequeue = function(){
  if(this.topCount > this.bottomCount){
    var temp = this.storage[this.bottomCount];
    delete this.storage[this.bottomCount];
    this.bottomCount++;
    return temp;
  }
};

queueMethods.size = function(){
  return this.topCount - this.bottomCount;
};