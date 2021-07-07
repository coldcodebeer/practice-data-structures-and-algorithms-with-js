class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c

b.left = d
b.right = e

c.right = f

const breadthFirstPrint = (root) => {
  const queue = [root]
  while (queue.length > 0) {
    const curr = queue.shift()
    console.log(curr.val)
    if (curr.left !== null) queue.push(curr.left)
    if (curr.right !== null) queue.push(curr.right)
  }
} // O(n) time, O(n) space

breadthFirstPrint(a)

const bfs = (root, target) => {
  const queue = [root]
  while (queue.length > 0) {
    const curr = queue.shift()
    if (curr.val === target) return true
    if (curr.left !== null) queue.push(curr.left)
    if (curr.right !== null) queue.push(curr.right)
  }

  return false
}

console.log(bfs(a, 'e')) // true
console.log(bfs(a, 'z')) // false

// Depth first search

const depthFirstPrint = (root) => {
  const stack = [root]
  while (stack.length > 0) {
    const curr = stack.pop()
    console.log(curr.val)
    if (curr.right !== null) stack.push(curr.right)
    if (curr.left !== null) stack.push(curr.left)
  }
} // O(n) time, O(n) space

depthFirstPrint(a)
// abdecf

console.log('------------------------------')

const depthFirstPrintRecursive = (root) => {
  if (root === null) return null
  console.log(root.val)
  depthFirstPrintRecursive(root.left)
  depthFirstPrintRecursive(root.right)
} // O(n) time, O(n) space

depthFirstPrintRecursive(a)

console.log('--------------------------')

// pre-order traversal
const preOrder = (root) => {
  if (root === null) return null
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}

// post-order traversal
const postOrder = (root) => {
  if (root === null) return null
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}

// in-order traversal
const inOrder = (root) => {
  if (root === null) return null
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}

const a1 = new Node(3)
const a2 = new Node(2)
const a3 = new Node(7)
const a4 = new Node(4)
const a5 = new Node(-2)
const a6 = new Node(5)

a1.left = a2
a1.right = a3

a2.left = a4
a2.right = a5

a3.right = a6

const sumTree = (root) => {
  if (root === null) return 0
  return sumTree(root.left) + root.val + sumTree(root.right)
} // O(n) time, O(n) space

console.log(sumTree(a1)) // 19