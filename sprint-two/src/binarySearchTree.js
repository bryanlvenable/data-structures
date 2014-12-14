var BinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  binarySearchTree.insert = function(value){
    // compare input with node value
    debugger;
    if( value < binarySearchTree.value ){
      if( binarySearchTree.left !== null ){
        binarySearchTree.left.insert(value);
      }
      binarySearchTree.left = BinarySearchTree(value);
      return;
    }
    if( value > binarySearchTree.value ){
      if( binarySearchTree.right !== null ){
        binarySearchTree.right.insert(value);
      }
      binarySearchTree.right = BinarySearchTree(value);
      return;
    }
    return;
    //  if input less than node value
    //    if left is already there
    //      compare again, probably recursion call
    //    if left is empty
    //      assign to left
    //  if input greater than node value
    //    if right is already there
    //      compare again, probably recursion call
    //    if right is empty
    //      assign to right
    //  if input equal to node value
    //    return;


  };

  binarySearchTree.contains = function(value){};

  binarySearchTree.depthFirstLog = function(cb){};

  return binarySearchTree;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
