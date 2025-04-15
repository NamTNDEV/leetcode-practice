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
var searchBST = function (root, val) {
  let current = root;
  while (current) {
    if (current.val === val) return current;
    if (current.val > val) current = current.left;
    else current = current.right;
  }

  return null;
};

// Approach 2: Recursion
var searchBST2 = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST2(root.left, val);
  else return searchBST2(root.right, val);
};
