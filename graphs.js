// edges list + vertices list: 节点(Vertex) 与 边（Edge）

(function () {
  const vertices = ['A', 'B', 'C', 'D', 'E']

  const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E'],
  ]

  const findAdjacentNodes = (node) => {
    const adjacentNodes = []

    for (let edge of edges) {
      const nodeIndex = edge.indexOf(node)
      if (nodeIndex > -1) {
        const adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]
        adjacentNodes.push(adjacentNode)
      }
    }

    return adjacentNodes
  }

  console.log(findAdjacentNodes('A')) // ['B', 'D']
  console.log(findAdjacentNodes('C')) // ['B', 'D', 'E']

  console.log('---- ---- ---- ----')

  const isConnected = (node1, node2) => {
    return edges.some(edge => {
      return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
    })
  }

  console.log(isConnected('C', 'B')) // true
  console.log(isConnected('A', 'E')) // false
})();


console.log('---- ---- ---- ---- ---- ---- ---- ----');

// adjacency matrix(邻接矩阵)

(function () {
  const vertices = ['A', 'B', 'C', 'D', 'E']
  const verticeIdxs = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
  }
  const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0],
  ]

  const findAdjacentNodes = (node) => {
    const adjacentNodes = []

    for (let i = 0; i < vertices.length; i++) {
      const nodeVertex = verticeIdxs[node]
      if (adjacencyMatrix[nodeVertex][i] === 1) adjacentNodes.push(vertices[i])
    }

    return adjacentNodes
  }

  console.log(findAdjacentNodes('A')) // ['B', 'D']
  console.log(findAdjacentNodes('C')) // ['B', 'D', 'E']

  console.log('---- ---- ---- ----')

  const isConnected = (node1, node2) => {
    const nodeIdx1 = verticeIdxs[node1]
    const nodeIdx2 = verticeIdxs[node2]
    return !!adjacencyMatrix[nodeIdx1][nodeIdx2]
  }

  console.log(isConnected('C', 'B')) // true
  console.log(isConnected('A', 'E')) // false
})();

console.log('---- ---- ---- ---- ---- ---- ---- ----');

// adjacency list(邻接表)

(function () {
  class Node {
    constructor(val) {
      this.val = val
      this.edgesList = []
    }

    connect(node) {
      this.edgesList.push(node)
      node.edgesList.push(this)
    }

    getAdjacentNodes() {
      return this.edgesList.map(node => node.val)
    }

    isConnected(node) {
      return this.edgesList.map(node => node.val).indexOf(node.val) > -1
    }
  }

  class Graph {
    constructor(nodes) {
      this.nodes = [...nodes]
    }

    addNodeToGraph(node) {
      this.nodes.push(node)
    }
  }

  const nodeA = new Node('A')
  const nodeB = new Node('B')
  const nodeC = new Node('C')
  const nodeD = new Node('D')
  const nodeE = new Node('E')

  const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

  nodeA.connect(nodeB)
  nodeA.connect(nodeD)
  nodeB.connect(nodeC)
  nodeC.connect(nodeD)
  nodeC.connect(nodeE)
  nodeD.connect(nodeE)

  console.log(nodeA.getAdjacentNodes()) // ['B', 'D']
  console.log(nodeC.getAdjacentNodes()) // ['B', 'D', 'E']

  console.log('---- ---- ---- ----')

  console.log(nodeC.isConnected(nodeB)) // true
  console.log(nodeA.isConnected(nodeE)) // false
})();

console.log('---- ---- traversal ---- ----');

// breadth first traversal
// Traverses broad into the data strusture by
// visiting neighbor nodes before children nodes
// uses a queue data structure
const bfs = (start, end) => {
  const queue = [start]
  const visitedNodes = new Set
  visitedNodes.add(start)

  while (queue.length > 0) {
    const node = queue.shift()

    if (node.val === end.val) return console.log('found it')

    for (let adjacency of node.edgesList) {
      if (!visitedNodes.has(adjacency)) {
        queue.push(adjacency)
        visitedNodes.add(adjacency)
      }
    }
  }
} // O(v+e) time, O(v) space

// depth first traversal
const dfs = (start, end, visited) => {
  if (!visited) visited = new Set

  if (start.val === end.val) {
    return console.log('Found it!')
  }

  visited.add(start)

  for (let adjacency of start.edgesList) {
    if (!visited.has(adjacency)) {
      dfs(adjacency, end, visited)
    }
  }

  return console.log('not found')
} // O(v+e) time, O(v) space