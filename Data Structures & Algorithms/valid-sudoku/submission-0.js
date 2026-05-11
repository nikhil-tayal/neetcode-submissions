class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length:9}, ()=>new Set())
        const column = Array.from({length:9}, ()=>new Set())
        const boxes = Array.from({length:9}, ()=>new Set())

        for(let i =0; i<board.length ; i++){
            for(let j=0; j<board[i].length ; j++){
                const val = board[i][j]
                if(val==='.') continue

                let boxIndex  = Math.floor(i/3)*3 + Math.floor(j/3) 

                if(row[i].has(val) || column[j].has(val) || boxes[boxIndex].has(val)){
                    return false
                }

                row[i].add(val)
                column[j].add(val)
                boxes[boxIndex].add(val)
            }
        }

        return true
    }
}
