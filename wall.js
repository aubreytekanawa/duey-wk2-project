const rows = 4
const cols = 4

const brick = { purchased: false }


let wall = {bricks: createBoard()}


wall.bricks[0][0].purchased = true
wall.bricks[1][2].purchased = true


console.log(wall.bricks[0][0])

console.log(wall)

function createBoard() {
  let board = []
  for(let i = 0; i < rows; i++) {
      board[i] = []
      for(let j = 0; j < cols; j++){
          board[i][j] = Object.create(brick)
      }
  }
  
  return board;
}

module.exports = wall