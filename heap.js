// Heap(max-heap, min-heap)
// uesed as Priority Queues
// used in Graph algorithms
// used in Heap Sort
// Great for anything where you need to quickly grab either the min or the max value of the data
// https://www.youtube.com/watch?v=3m2n25nOoSw&ab_channel=BeforeSemicolon
// find-min/max O(1)

const comparison = Object.freeze({
  BIGGER: 1,
  BIGGER_OR_EQUAL: [1, 0],
  SMALLER: -1,
  SMALLER_OR_EQUAL: [-1, 0],
  EQUAL: 0,
})

const defaultCompareFunction = (a, b) => {
  if (a > b) return comparison.BIGGER
  if (a < b) return comparison.SMALLER

  return comparison.EQUAL
}

class MinHeap {
  heap = []

  constructor(compareFn = defaultCompareFunction) {
    this.compare = compareFn
  }

  get size() {
    return this.heap.length
  }

  get isEmpty() {
    return this.heap.length === 0
  }

  peek() {
    return this.isEmpty ? null : this.heap[0]
  }

  print() {
    this.printNode()
  }

  // o(longN)
  insert(value) {
    if (value !== undefined && value !== null) {
      this.heap.push(value)
      this.siftUp(this.size - 1)
      return true
    }

    return false
  }
  // o(longN)
  extract() {
    if (this.isEmpty) return null

    if (this.size === 1) return this.heap.shift()

    const removedNode = this.heap.shift()
    this.siftDown(0)
    return removedNode
  }

  siftDown(index) {
    let currentIndex = index
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)

    if (
      leftIndex < this.size &&
      this.compare(this.heap[currentIndex], this.heap[leftIndex]) === comparison.BIGGER
    ) {
      currentIndex = leftIndex
    }

    if (
      rightIndex < this.size &&
      this.compare(this.heap[currentIndex], this.heap[rightIndex]) === comparison.BIGGER
    ) {
      currentIndex = rightIndex
    }

    if (currentIndex !== index) {
      this.swap(index, currentIndex)
      this.siftDown(currentIndex)
    }
  }

  siftUp(index) {
    let parentIndex = this.getParentIndex(index)

    while (
      index > 0 &&
      this.compare(this.heap[parentIndex], this.heap[index] === comparison.BIGGER)
    ) {
      this.swap(parentIndex, index)
      index = parentIndex
      parentIndex = this.getParentIndex(index)
    }
  }

  swap(i, j) {
    // const temp = this.#heap[i]
    // this.#heap[i] = this.#heap[j]
    // this.#heap[j] = temp
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  getLeftIndex(index) {
    return 2 * index + 1
  }

  getRightIndex(index) {
    return 2 * index + 2
  }

  getParentIndex(index) {
    if (index === 0) return null

    return Math.floor((index - 1) / 2)
  }

  printNode(i = 0, spaceCount = 0, label = '*') {
    if (i >= this.size) return
    console.log(`${' '.repeat(spaceCount)}${label}: ${this.heap[i]} [${i}]`)
    this.printNode(this.getLeftIndex(i), spaceCount + 3, 'L')
    this.printNode(this.getRightIndex(i), spaceCount + 3, 'R')
  }
}

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompareFunction) {
    super((a, b) => compareFn(b, a))
  }
}

const hp = new MinHeap

hp.insert(2)
hp.insert(3)
hp.insert(4)
hp.insert(5)
hp.insert(1)

hp.print()

hp.extract()
hp.print()
hp.extract()
hp.extract()
hp.extract()
hp.extract()

