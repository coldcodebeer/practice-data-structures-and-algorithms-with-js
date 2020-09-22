class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  append(value) {
    const newNode = new LinkedListNode(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  delete(value) {
    if (!this.head) return null
    let nodeToDelete = null

    while(this.head && this.head.value === value) {
      nodeToDelete = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          nodeToDelete = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }

    return nodeToDelete
  }

  find({ value, callback, }) {
    if (!this.head) return null

    let currentNode = this.head

    while(currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) return currentNode

      // If value is specified then try to compare by value..
      if (value !== undefined && value === currentNode.value) return currentNode

      currentNode = currentNode.next
    }

    return null
  }

  deleteTail() {
    const tailTodelete = this.tail

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null
      this.tail = null

      return tailTodelete
    }

    // If there are many nodes in linked list...
    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head

    while(currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }
    
    this.tail = currentNode
    return tailTodelete
  }

  deleteHead() {
    if (!this.head) return null

    const headToDelete = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return headToDelete
  }

  fromArray(values) {
    values.forEach(value => this.append(value))
    return this
  }

  toArray() {
    const nodes = []

    let currentNode = this.head

    while(currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }

  reverse() {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null

    while(currentNode) {
      nextNode = currentNode.next

      currentNode.next = prevNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedListI {
  constructor() {
    this.head = null
    this.tail = this.head
    this.length = 0
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
  }

  prepend(value) {
    const newNode = newNode(value)

    newNode.next = this.head
    this.head = newNode

    this.length++
  }

  insert(value, index) {
    if (index >= this.length) this.append(value)

    const newNode = new Node(value)

    const { prevNode, nextNode, } = this.getSiblings(index)
    prevNode.next = newNode
    nextNode.next = nextNode

    this.length++
  }

  // O(n)
  lookup(index) {
    let counter = 0
    let currentNode = this.head

    while (counter < index) {
      currentNode = currentNode.next
      counter++
    }
    
    return currentNode
  }

  remove(index) {
    let { prevNode, nextNode, } = this.getSiblings(index)
    prevNode.next = nextNode.next
    this.length--
  }

  // The reverse operation has a complexity of O(n)
  reverse() {
    let prevNode = null
    let currentNode = this.head

    while (currentNode !== null) {
      let nextNode = currentNode.next

      currentNode.next = prevNode

      prevNode = currentNode

      currentNode = nextNode
    }

    this.head = prevNode
  }

  getSiblings(index) {
    let count = 0
    let prevNode = this.head
    let nextNode = prevNode.next

    while (count < index -1) {
      prevNode = prevNode.next
      nextNode = prevNode.next
      count++
    }

    return {
      prevNode,
      nextNode,
    }
  }
}