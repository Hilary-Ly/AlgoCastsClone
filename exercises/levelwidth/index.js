// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) { // width = means breadth first traversal!
   const arr = [root, 'endLevel'] // create a "stopper" that isnt a node
   const counters = [0];
   while (arr.length > 1) { // account for the stopper in the while loop
      const node = arr.shift();
      if (node === 'endLevel') { 
          arr.push('endLevel');
          counters.push(0);
          // as we get to the end of the parent level, we can also cap it at their children level. run out of parents = run out of their children. everything after this is not their children (aka a different level)
      } else {
         arr.push(...node.children); // no children is ok
         counters[counters.length - 1]++;
      }
   }
   return counters;
}


module.exports = levelWidth;
