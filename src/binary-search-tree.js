const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  
  constructor() {
    this.rootNode = null;
  }
  
  root() {
    return this.rootNode;
  }
  
  add(data) {
    this.rootNode = this._insert(this.rootNode, data);
  }
  
  _insert(node, data) {
    if (node === null) {
      return new Node(data);
    }
    
    if (data < node.data) {
      node.left = this._insert(node.left, data);
    } else if (data > node.data) {
      node.right = this._insert(node.right, data);
    }
    
    return node;
  }
  
  has(data) {
    return this._search(this.rootNode, data);
  }
  
  _search(node, data) {
    if (node === null) {
      return false;
    }
    
    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }
  
  find(data) {
    return this._find(this.rootNode, data);
  }
  
  _find(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._find(node.left, data);
    } else {
      return this._find(node.right, data);
    }
  }
  
  remove(data) {
    this.rootNode = this._remove(this.rootNode, data);
  }
  
  _remove(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }
      
      if (node.left === null) {
        return node.right;
      }
      
      if (node.right === null) {
        return node.left;
      }
      
      const minRightNode = this._findMin(node.right);
      node.data = minRightNode.data;
      node.right = this._remove(node.right, minRightNode.data);
    } else if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else {
      node.right = this._remove(node.right, data);
    }
    
    return node;
  }
  
  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  
  min() {
    const minNode = this._findMin(this.rootNode);
    return minNode ? minNode.data : null;
  }
  
  max() {
    return this._findMax(this.rootNode);
  }
  
  _findMax(node) {
    while (node !== null && node.right !== null) {
      node = node.right;
    }
    return node ? node.data : null;
  }
}

module.exports = {
  BinarySearchTree
};
