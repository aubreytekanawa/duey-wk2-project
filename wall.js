const rows = 4
const cols = 4

const brick = { purchased: false }

let wall = { bricks: createBoard() }

wall.bricks[0][0].purchased = true
wall.bricks[1][2].purchased = true

function createBoard() {
  let idCounter = 1
  let board = []
  for (let i = 0; i < rows; i++) {
    board[i] = []
    for (let j = 0; j < cols; j++) {
      board[i][j] = Object.create(brick)
      board[i][j].id = idCounter
      board[i][j].price = '$5'
      board[i][j].name = ''
      board[i][j].organisation = ''
      board[i][j].email = ''
      board[i][j].comment = ''
      idCounter++
    }
  }

  return board
}

module.exports = wall
