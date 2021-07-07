class StackNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val)
    } else {
      const pushedNode = new StackNode(val)
      pushedNode.next = this.top
      this.top = pushedNode
    }

    this.size++
  }

  pop() {
    if (this.size === 0) return null
    const poppedNode = this.top
    this.top = this.top.next
    this.size--
    return poppedNode.val
  }

  getTop() {
    return this.top.val
  }
}