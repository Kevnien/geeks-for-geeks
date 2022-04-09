// Given the root of a binary tree. Check whether it is a BST or not.
// Note: We are considering that BSTs can not contain duplicate Nodes.
// A BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

class Solution 
{
    //Function to check whether a Binary Tree is BST or not.
    isBST(root)
    {
        //your code here
        const stack = [root];
        while (stack.length > 0) {
            const current = stack.pop();
            if (!this.isExisting(root, current.data)) return 0;
            current.left && stack.push(current.left);
            current.right && stack.push(current.right);
        }
        return 1;
    }
    isExisting(root, value) {
        let current = root;
        while (current) {
            if (value === current.data) {
                return true;
            } else if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}
