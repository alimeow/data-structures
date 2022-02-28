var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  var found = false;
  // console.log(this.children);
  // console.log(this.children.length);
  var help = function (array) {
    array = array || [];
    // condition to stop recursion
    //check each children's value and see if it matchs target
    // console.log(array);
    array.forEach(function (element) {
      if (element.value === target) {
        found = true;
        return;
      }
      if (element.children) {
        help(element.children);
      }
      // this.contains(target);
    });
    // console.log(this.children);
  };
  help(this.children);

  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
linear
 */
