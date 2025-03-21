function changeDice() {
    var diceImages = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];
    var randomIndex1 = Math.floor(Math.random() * diceImages.length);
    var randomIndex2 = Math.floor(Math.random() * diceImages.length);
    document.querySelector(".img1").setAttribute("src", diceImages[randomIndex1]);
    document.querySelector(".img2").setAttribute("src", diceImages[randomIndex2]);
   

    
    
    if(randomIndex1 > randomIndex2 ){
        document.querySelector("h1").innerHTML= "🚩Player 1 wins";
    }
    else if(randomIndex2 > randomIndex1){
        document.querySelector("h1").innerHTML= "Player 2 wins 🚩";
    }
    
    else{
         document.querySelector("h1").innerHTML = "Draw"
    }
}

window.onload = changeDice;
