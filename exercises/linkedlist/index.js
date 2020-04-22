// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
   constructor(data, next = null) {
      // null rather than undefined, because null is more deliberate
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
   } // head is the only info a linked list has, any other information would require traversing the nodes

   insertFirst(data) {
      const newNext = this.head; // could be null which is ok
      const newHead = new Node(data, newNext);
      this.head = newHead;
   }
   size() {
      let count = 0;
      let curr = this.head;
      while (curr) {
         count++;
         curr = curr.next;
      }
      return count;
   }
   getFirst() {
      return this.head;
   }
   getLast() {
      // tip: could just write a getAt() to replace getFirst/Last
      if (!this.head) return null;
      let curr = this.head;
      while (curr) {
         if (!curr.next) return curr;
         curr = curr.next;
      }
      // if (!this.head) return null
      // let curr = this.head;
      // while (curr.next) curr = curr.next;
      // return curr;
   }
   clear() {
      // all created nodes now essentially invisible
      this.head = null;
   }
   removeFirst() {
      if (!this.head) return;
      const newHead = this.head.next; // null is ok
      this.head = newHead;
   }
   removeLast() {
      // redundant - removeAt() to replace them all!
      if (this.size() < 2) {
         this.head = null;
         return;
      }
      let prev = this.head;
      let curr = this.head.next;
      while (curr.next) {
         prev = curr;
         curr = curr.next;
      }
      prev.next = null;
   }
   insertLast(data) {
      // redundant - ask if insertAt() would suffice for all!
      const currLast = this.getLast(); // leverage logic to check for head
      const newLast = new Node(data);
      if (currLast) currLast.next = newLast;
      else this.head = newLast;
   }
   getAt(index) {
      let curr = this.head;
      //    for (let i = 0; i < index; i++) {
      //        if (curr) curr = curr.next
      //        else return null // if no head, or index is greater than size
      //    }
      //  return curr
      let counter = 0;
      while (curr) {
         if (counter === index) return curr;
         curr = curr.next;
         counter++;
      }
      return null;
   }
   removeAt(index) {
      if (!this.head) return;
      if (index === 0) {
         this.head = this.head.next;
         return;
      }
      const prev = this.getAt(index - 1);
      // const next = this.getAt(index + 1);
      if (!prev || !prev.next) return;
      const newCurr = prev.next.next; // can be null
      prev.next = newCurr;
   }
   insertAt(data, index) {
      if (!this.head) {
         this.head = new Node(data);
         return;
      }
      if (index === 0) {
         const oldHead = this.head;
         this.head = new Node(data, oldHead);
         return;
      }
      const prev = this.getAt(index - 1) || this.getLast();
      const newNext = prev.next; // could be null
      prev.next = new Node(data, newNext);
   }
   forEach(func) {
      let curr = this.head; // null is ok
      while (curr) {
         func(curr);
         curr = curr.next;
      }
   }
   // generator - allows linked list nodes to be accessed via for-of loop
   *[Symbol.iterator]() {
       let curr = this.head
       while (curr) {
           yield curr
           curr = curr.next
       }
   }
}

// const list = new LinkedList()
// list.head = new Node(10)

module.exports = { Node, LinkedList };
