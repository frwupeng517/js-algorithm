/*
求一个二叉搜索树的第 K 小值

二叉树

-、是一颗树
-、每个节点，最多只能有2个子节点
-、树节点的数据结构 {value, left?, right?}

二叉树的遍历

-、前序遍历：root -> left -> right
-、中序遍历：left -> root -> right
-、后序遍历：left -> right -> root

二叉搜索树 BST (Binary Search Tree) 特点

-、left（包括其后代）value <= root value
-、right（包括其后代）value >= root value
-、可使用 二分法 进行快速查找
*/

export interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

export const BST: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

const arr: number[] = [];

/**
 * 二叉树前序遍历
 */
export const preOrderTraverse = (node: ITreeNode | null) => {
  if (node === null) return;
  console.log("pre", node.value);
  arr.push(node.value);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
};

/**
 * 二叉树中序遍历
 */
export const inOrderTraverse = (node: ITreeNode | null) => {
  if (node === null) return;
  inOrderTraverse(node.left);
  console.log("in", node.value);
  arr.push(node.value);
  inOrderTraverse(node.right);
};

/**
 * 二叉树后序遍历
 */
export const postOrderTraverse = (node: ITreeNode | null) => {
  if (node === null) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  console.log("post", node.value);
  arr.push(node.value);
};

/**
 * 寻找 BST 里的第 K 小值
 */
export const getKthValue = (node: ITreeNode, k: number): number | null => {
  // preOrderTraverse(node);
  inOrderTraverse(node);
  // postOrderTraverse(node);
  return arr[k - 1] || null;
};
