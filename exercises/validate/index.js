// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) return false
    if (min !== null && node.data < min) return false
    if (node.left && !validate(node.left, min, node.data)) return false
    if (node.right && !validate(node.right, node.data, max)) return false
    return true
}

// these 4 criteria are the only ways that a BST would be invalid. if any are met, immediately return false and we are done
// recursive cases both add to the stack simultaneously (if node has both left and right children) and check for any reason to return false

module.exports = validate;
