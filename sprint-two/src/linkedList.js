var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = Node(value);
    }

  };

  list.removeHead = function() {
    // list.head should should be assigned to the next node
    var saveNode = list.head;
    // console.log(saveNode);
    list.head = saveNode.next;
    return saveNode.value;

  };

  list.contains = function(target) {
    var found = false;
    var currentNode = list.head;
    while (found !== true && currentNode !== null) {
      if (currentNode.value === target) {
        found = true;
      }
      currentNode = currentNode.next; //
    }
    return found;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

linear!
 */
