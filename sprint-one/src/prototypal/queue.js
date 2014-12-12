var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.topCounter = 0;
  someInstance.botCounter = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.topCounter] = value;
  this.topCounter++;
}

queueMethods.dequeue = function() {
  if (this.topCounter > this.botCounter) {
    var temp = this.storage[this.botCounter];
    delete this.storage[this.botCounter];
    this.botCounter++;
    return temp;
  }

}

queueMethods.size = function() {
  return this.topCounter - this.botCounter;
}
