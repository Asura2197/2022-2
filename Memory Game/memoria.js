function createBoard(numRows, numCols){

    const rows = []  //lista vacia

    for(let i = 0; i<numRows; i++){
        const casillas = []

        //crear casillas
        for(let j = 0; j<numCols; j++){
            casillas.push(0)
        }

        rows.push(casillas)
    }
    return rows
}

function printBoard(board){
    for(let row of board){
        let rowStr = ""
        for(let casilla of row){
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setvalue(board, row, col, value){
    board[row][col] = value
}

//manera actual de expresar funciones
const getValue = (board,row,col)=>{
    return board[row][col]
}

let board = createBoard(6,4)
//console.log(board[5][1])

setvalue(board,5,3,7)
printBoard(board)

console.log(getValue(board,5,3))