// const rows = Array(6).fill({})
// const cells = Array(6).fill({})

const cellSize = 100;
const width = 800;
const height = 800;

const rows = height / cellSize
const cols = width / cellSize

const brick = { purchased: false }

//console.log('rows', rows, 'cells', cells)
const container = document.querySelector('.container')
const btns = document.createElement("button")

function createBoard() {
  let board = []
  for(let i = 0; i < rows; i++) {
      board[i] = []
      for(let j = 0; j < cols; j++){
          board[i][j] = brick
      }
  }
  console.log(board)
  return board;
}

createBoard()

function createCells() {
  let cells = []
  for(let i = 0; i < rows.length; i++) {
    for(let j = 0; j < cols.length; j++) {
      cells.push({ i, j})
    }
  }
  console.log(cells)
  return cells
}

createCells()


//module.exports = wall