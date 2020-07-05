
  let player1 = {
    name: "",
    shipCount: 4,
    gameBoard: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ]

   
    
  }
  let player2 = {
    name: "",
    shipCount: 4,
    gameBoard: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ]
  }

  player1.name =  prompt("What is your name Player 1?");
  player2.name =  prompt("What is your name Player 2?");
  console.log(player1.name, player2.name);

  const randomCoordinates = (ship) => {
    let x = Math.floor(Math.random() * 4)
    let y = Math.floor(Math.random() * 4)
    console.log(player1);

    while (ship.gameBoard [y][x] === 1){
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    } ship.gameBoard [y] [x] = 1
  }

  const Winner = (name) => {
      return `${name} is the winner!`
    } 
    
 
    


  const battleship = () => {
    for(let i=0; i < 4; i++){
      const player1ship = randomCoordinates(player1);
      const player2ship = randomCoordinates(player2);
    }
    let currentPlayer = player1;
      while (currentPlayer.shipCount >0 && player2.shipCount >0 ){
      let guessXone = prompt (`${player1.name}, Enter your guess for x coordinate`)
      let guessYone = prompt (`${player1.name}, Enter your guess for y coordinate`)

    
      if(player2.gameBoard[guessYone][guessXone]=== 1){
        alert("HIT! You destroyed a ship!")
        player2.shipCount-=1;
      } else{
        alert ("Miss!");
      }
    if(player2.shipCount === 0){
      return Winner (player2.name)
    } else if (player1.shipCount === 0){
      return Winner (player1.name)
    }
    const guessXtwo = prompt (`${player2.name}, Enter your guess for x coordinate`)
    const guessYtwo = prompt (`${player2.name}, Enter your guess for y coordinate`)

    if(player1.gameBoard[guessYtwo][guessXtwo] === 1){
      alert("HIT! You destroyed a ship!")
      player1.shipCount -= 1;
    } else {
      alert ("Miss!");
    } 
    
      
    }
  }
  


const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
