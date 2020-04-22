// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let pointer = list.head // n spaces away from B
    let pointerN = list.head // move toward last
    for (let i = 0; i < n; i++) {
        pointerN = pointerN.next
    }
    while (pointerN.next) {
        pointer = pointer.next
        pointerN = pointerN.next
    }
    return pointer
}

module.exports = fromLast;
