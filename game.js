const prompt = require('prompt-sync')();
const p1 = prompt('player1: ');
const p2 = prompt('player2: ');
let gameover = false;
let p1turn = true;
let board = [];
let row = 3;
let col = 3; 
let count=0;

for ( let i = 0; i < row; i++ ) {
board[ i ] = [];
    for ( let j = 0; j < col; j++ ) {
        board[ i ][ j ] = " ";
    }
}
console.log(' | 1' + ' | 2 ' + '| 3 |' + '\n--------------\n' + '1' + '| ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2]
+' |\n--------------\n' + '2' + '| ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2]
+' |\n--------------\n' + '3' + '| ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + ' |\n--------------\n');
function gamestatus(row,col,board){
    for ( i = 0; i < row; i++ )
    {
        if(board[i][0]===board[i][1] && board[i][0] ===board[i][2])
        {
            if(board[i][0]!==" ")
                return true;
        }
    }
    for (j=0; j < col; j++)
    {
        if(board[0][j] === board[1][j] && board[0][j] === board[2][j])
        {
            if(board[0][j]!==" ")
                return true;
        }
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]){
        if(board[0][0]!==" ")
            return true;
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]){
        if(board[0][2]!==" ")
            return true;
    }
    else return false;
}
while (!gameover && count<9)
{
    if (p1turn)
    {
        console.log(p1)
        let i = prompt('row: ');
        let j = prompt('column: ');
        if(i<=3 && j>=1 && j<=3 && j>=1 && board[i-1][j-1] != "X" && board[i-1][j-1] != "O")
        {   
            board[i-1][j-1] = "X"
            count++;
            p1turn=false;
        }
        else
        {
            while( i>3 || i<1 || j>3 || j<1 || (board[i-1][j-1] == "X" || board[i-1][j-1] == "O"))
            {
                if(i>3 || i<1 || j>3 || j<1 )
                    console.log("Value of rows and colums must be 1,2 or 3")
                else
                    console.log("this field is busy")
                console.log(p1)
                i = prompt('row: ');
                j = prompt('column: ');
            }
            board[i-1][j-1] = "X"
            count++;
            p1turn=false;
        }
    }
    else
    {   
        console.log(p2)
        let i = prompt('row: ');
        let j = prompt('column: ');
        if(i<=3 && j>=1 && j<=3 && j>=1 && board[i-1][j-1] != "X" && board[i-1][j-1] != "O")
        {   
            board[i-1][j-1] = "O"
            count++;
            p1turn=true;
        }
        else
        {
            while( i>3 || i<1 || j>3 || j<1 || (board[i-1][j-1] == "X" || board[i-1][j-1] == "O"))
            {
                if(i>3 || i<1 || j>3 || j<1 )
                    console.log("Value of rows and colums must be 1,2 or 3")
                else
                    console.log("this field is busy")
                console.log(p2)
                i = prompt('row: ');
                j = prompt('column: ');
            }
            board[i-1][j-1] = "O"
            count++;
            p1turn=true;
        }
        
    }  
    console.log(' | 1' + ' | 2 ' + '| 3 |' + '\n--------------\n' + '1' + '| ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2]
    +' |\n--------------\n' + '2' + '| ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2]
    +' |\n--------------\n' + '3' + '| ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + ' |\n--------------\n');
    
    gameover = gamestatus(row,col,board)
}
if (gameover)
{
    if (p1turn)
        console.log(p2 + " won")
    else 
        console.log (p1 + " won")
}
else console.log ("It is a tie")