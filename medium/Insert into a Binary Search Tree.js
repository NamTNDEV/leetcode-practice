/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// Approach 1: Loop
var insertIntoBST1 = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;
  let current = root;
  while (true) {
    if (val > current.val) {
      if (!current.right) {
        current.right = newNode;
        break;
      }
      current = current.right;
    } else {
      if (!current.left) {
        current.left = newNode;
        break;
      }
      current = current.left;
    }
  }

  return root;
};

// Approach 2: Recursion
var insertIntoBST2 = function (root, val) {
  if (!root) return new TreeNode(val);
  if (val > root.val) {
    root.right = insertIntoBST2(root.right, val);
  } else {
    root.left = insertIntoBST2(root.left, val);
  }

  return root;
};
