var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  // your code here
<<<<<<< HEAD
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me
=======
  newTree.children = [];
  _.extend(newTree, treeMethods);
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
  return newTree;
};

var treeMethods = {};

<<<<<<< HEAD
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;


=======
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
>>>>>>> d4bdd391092fc4c0fabcde98ac749a8db2517efb
};



/*
 * Complexity: What is the time complexity of the above functions?
linear
 */
