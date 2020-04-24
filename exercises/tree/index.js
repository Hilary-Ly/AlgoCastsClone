// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    // manipulation of tree happens at the node in a tree (vs the linked list)
    constructor(data) {
        this.data = data
        this.children = []
    }
    add(data) {
        const newNode = new Node(data)
        this.children.push(newNode);
    }
    remove(data) {
        this.children = this.children.filter((child) => child.data !== data)
        // this.children = this.children.filter(child => {
        //     if (child.data !== data) return child
        // })
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    traverseBF(fn) {
        const arr = [this.root] 
        // create a holding array to store nodes temporarily until we invoke the callback function on it
        while (arr.length) { // rather than (arr.length > 0)
            const node = arr.shift()
            arr.push(...node.children) // ok if no children also
            fn(node)
        }
    }
    traverseDF(fn) { // same as BF except one thing
        const arr = [this.root]
        while (arr.length) {
            const node = arr.shift()
            arr.unshift(...node.children) // put children in the beginning!
            fn(node)
        }
    }
}

// const node = new Node(1)
// const tree = new Tree()
// tree.root = node

module.exports = { Tree, Node };
