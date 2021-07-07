// sname game base on queque
class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ]
  }

  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    }

    const currentHead = this.snakeBody[this.snakeBody.length - 1]
    const [currRow, currCol] = currentHead
    const [changeRow, changeCol] = delta[direction]
    const x = currRow + changeRow
    const y = currCol + changeCol
    if (x > 9 || x < 0 || y > 9 || y < 0) return
    const newHead = [x, y]
    this.snakeBody.push(newHead)
    this.snakeBody.shift()
  }

  draw() {
    const grid = []
    for (let i = 0; i < 10; i++) {
      const row = []
      for (let j = 0; j < 10; j++) {
        row.push(' ')
      }
      grid.push(row)
    }

    this.snakeBody.forEach(pos => {
      let [row, col] = pos
      grid[row][col] = 'O'
    })

    console.clear()
    grid.forEach(row => console.log(row.join('|')))
  }

  play() {
    const stdin = process.stdin
    stdin.setRawMode(true)
    stdin.resume()
    stdin.setEncoding('utf8')

    stdin.on('data', (keypress) => {
      if (keypress === 'w') this.move('up')
      if (keypress === 'a') this.move('left')
      if (keypress === 's') this.move('down')
      if (keypress === 'd') this.move('right')
      if (keypress === 'q') process.exit()

      this.draw()
    })
  }
}

// const game = new Snake
// game.draw()

// console.log('--------------------')

// game.move('up')
// game.draw()

const game = new Snake
game.play()