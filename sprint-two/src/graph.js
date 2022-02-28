

// Instantiate a new graph
var Graph = function() {
  this.vertice = {};
  this.value;
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertice[this.value] = node;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  if (this.vertice[this.value] === node) {
    found = true;
  }
  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var copy = this.vertice[this.value];
  if (copy === node) {
    delete this.vertice[this.value];
  }
  return copy;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  if (this.edge[this.value] === fromNode.toString() + toNode.toString()) {
    found = true;
  }
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[this.value] = fromNode.toString() + toNode.toString();

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var nodes = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


