// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []
    }

    add(record) { // adds to the beginning
        return this.data.unshift(record)
    }

    remove() { // removes from the opposite side (end)
        return this.data.pop()
    }
}

module.exports = Queue;
