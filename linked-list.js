class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val)
      return
    }

    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }
    curr.next = new Node(val)
  }

  print() {
    let str = ''
    let curr = this.head
    while (curr !== null) {
      str += curr.val + '->'
      curr = curr.next
    }
    console.log(str)
  }

  contains(target) {
    let curr = this.head

    while (curr !== null) {
      if (curr.val === target) return true
      curr = curr.next
    }

    return false
  }

  // Recursive version
  appendRecursive(val) {
    if (this.head === null) {
      this.head = new Node(val)
      return
    }

    this._appendRecursive(val, this.head)
  }

  _appendRecursive(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val)
      return
    }

    this._appendRecursive(val, curr.next)
  }

  printRecursive() {
    const output = this._printRecursive(this.head)
    console.log(output)
  }

  _printRecursive(curr) {
    if (curr === null) return ''
    return curr.val + '->' + this._printRecursive(curr.next)
  }

  containsRecursive(target) {
    return this._containsRecursive(target, this.head)
  }

  _containsRecursive(target, curr) {
    // Base cases

    // 1. the list is empty
    // 2. traversed all the way through the list and did not find the target
    if (curr === null) return false

    if (curr.val === target) return true

    return this._containsRecursive(target, curr.next)
  }
}

const list = new LinkedList()
list.append('a')
list.append('b')
list.append('c')
list.append('d')
// a -> b -> c -> d
// console.log(list.head)
list.print()

console.log(list.contains('a')) // true
console.log(list.contains('b')) // true
console.log(list.contains('c')) // true
console.log(list.contains('d')) // true
console.log(list.contains('x')) // false
console.log(list.contains('y')) // false

// add up all the vals of the list

const sumLIst = (head) => {
  let sum = 0, curr = head

  while (curr !== null) {
    sum += head.val
    curr = curr.next
  }

  return sum
}

const sumListRecursive = (head) => {
  if (head === null) return 0
  return head.val + sumListRecursive(head.next)
} // Time: O(n), Space: O(n)


// delete node

const deleteNode = (head, target) => {
  if (head.val === target) return head.next

  let prev = null, curr = head

  while (curr !== null) {
    if (curr.val === target) {
      prev.next = curr.next
    }

    prev = curr
    curr = curr.next
  }

  return head
} // Time: O(n), Space: O(1)

const deleteNodeRecursive = (head, target) => {
  if (head.val === target) return head.next
  _deleteNodeRecursive(head, null, target)
  return head
}

const _deleteNodeRecursive = (curr, prev, target) => {
  if (curr === null) return

  if (curr.val === target) {
    prev.next = curr.next
    return
  }

  _deleteNodeRecursive(curr.next, curr, target)
} // Time: O(n), Space: O(n)


// reverse

const reverseList = (head) => {
  let curr = head, prev = null

  while (curr !== null) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
} // Time: O(n), Space: O(1)

const reverseListRecursive = (curr, prev = null) => {
  if (curr === null) return prev

  const next = curr.next
  curr.next = prev

  return reverseListRecursive(next, curr)
} // O(n) time, O(n) space