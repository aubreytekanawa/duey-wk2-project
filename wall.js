const cellSize = 100;
const width = 800;
const height = 800;

const rows = height / cellSize
const cols = width / cellSize

const brick = { purchased: false }

//console.log('rows', rows, 'cells', cells)
// const container = document.querySelector('.container')
// const btns = document.createElement("button")

let wall = createBoard()
console.log(wall)

function createBoard() {
  let board = []
  for(let i = 0; i < rows; i++) {
      board[i] = []
      for(let j = 0; j < cols; j++){
          board[i][j] = brick
      }
  }
  
  return board;
}

module.exports = wall