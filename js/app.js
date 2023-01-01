class Board {
    constructor() {

    }
    //pass where you want to display the board 
    displayBoard = (divClass) => {
        let board = document.querySelector(`.${divClass}`)

        for (let i = 1; i < 65; i++) {
            // board.innerHTML = `<div class="sqaure n${i}>test</div>`
            board.innerHTML += `<div class="square n${i}"></div>`
        }
        let squares = [9,16,25,32,41,48,57,64]
        squares.forEach(square => {
            x.colorBoard(square)
        })
    }
    //board coloring 
    colorBoard = (x) => {
        let on = 0;
        for (let i = x - 8; i < x+1; i++) {
            if (on == 0) {
                document.querySelector(`.n${i}`).classList.add("dark")
                on = 1
            } else if (on == 1) {
                document.querySelector(`.n${i}`).classList.add("light")
                on = 0
            }
        }
    }
    //
    displaySinglePiece = (sqaureNumber, pieceType) =>{
        let piece = document.querySelector(`.n${sqaureNumber}`)
        if(pieceType == "r"){
            piece.style.backgroundImage = "url('pieces/bRook.png')"

        }else if(pieceType == "k"){
            piece.style.backgroundImage = "url('pieces/bKnight.png')"
        }
       
    }

    //dispalying every piece using FEN
    displayPieces = (fen)=>{
        let fenArray = fen.split("")
        let index = 1
        for(let i= 1;i < 65;i++){
            
            if(i == fenArray.length+1){
                break
            }else if(parseInt(fenArray[i-1])){
                
                index += parseInt(fenArray[i-1])+1

            }else if(fenArray[i-1] == "/"){
                index +=8
            }else{
                this.displaySinglePiece(index, fenArray[i-1])
                
            }
        }
        
            
        
    }
    
   


}
let x = new Board()
x.displayBoard("board")


x.displayPieces("r2r2r")