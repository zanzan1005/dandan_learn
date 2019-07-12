function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 let a1 = new TreeNode(1);
 let a2 = new TreeNode(2);
 let a3 = new TreeNode(3);

 a1.left = a2;
 a2.left = a3;

 //中序遍历 一棵大树 递归的概念
 var inorderTraversal = function(root) {
  let arr = [];
  const inorder = root => {
    if (root === null) return null;
    inorder(root.left);
    arr.push(root);
    inorder(root.right);
  }
  inorder(root);
  return arr;
 }
 console.log(inorderTraversal(arr));