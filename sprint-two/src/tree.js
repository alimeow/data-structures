var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
