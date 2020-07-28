// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// hint 1: The major difference between a queue and a stack is the order of elements. A queue removes the oldest item and a stack removes the newest item. How could you remove the oldest item from a stack if you only had access to the newest item?
// hint 2: We can remove the oldest item from a stack by repeatedly removing the newest item (inserting those into the temporary stack) until we get down to one element. Then, after we've retrieved the newest item, putting all the elements back. The issue with this is that doing several pops in a row will require 0 (N) work each time. Can we optimize for scenarios where we might do several pops in a row?

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack
        this.second = new Stack
    }
    add(record) { // add to the end
        this.first.push(record)
    }
    remove() { // want to remove the first item, so we take everything out one-by-one so that it becomes the last item in the second stack
        while (this.first.peek()) { // take everything out
            this.second.push(this.first.pop())
        }
        const removed = this.second.pop() // the one we want is now last
        while (this.second.peek()) { // put the rest back in
            this.first.push(this.second.pop())
        }
        return removed
    }
    peek() {
        while (this.first.peek()) {
           this.second.push(this.first.pop());
        }
        const oldestItem = this.second.peek();
        while (this.second.peek()) {
           this.first.push(this.second.pop());
        }
        return oldestItem;
    }
}

module.exports = Queue;


// from interview cake
// class QueueTwoStacks {
//    constructor() {
//       this.instack = [];
//       this.outstack = [];
//    }

//    enqueue(item) {
//       this.instack.push(item);
//    }

//    dequeue() {
//       if (this.outstack.length === 0) {
//          while (this.instack.length) {
//             let item = this.instack.pop();
//             this.outstack.push(item);
//          }
//          if (!this.outstack.length) throw new Error();
//       }
//       return this.outstack.pop();
//    }
// }