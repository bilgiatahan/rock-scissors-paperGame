const Main = () => {
    const match = document.getElementsByClassName('match')[0];
    let playerScore = 0;
    let computerScore = 0;
    //start screen
    const startGame = () => {
        const playBtn = document.querySelector(".start-match button");
        const startScreen = document.querySelector(".start-match");

        playBtn.addEventListener("click", () => {
            startScreen.classList.add("endGame");
            match.classList.remove("endGame");
            Match();
        });
    }
    //play game
    const Match = () => {

        const computer = ["rock", "scissors", "paper"]
        const buttons = document.querySelectorAll(".button button")

        const computerHandImage = document.getElementById('computerHand');
        const playerHandImage = document.getElementById('playerHand');

        let computerHand;

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                computerChoice = Math.floor(Math.random() * 3);
                computerHand = computer[computerChoice]

                setTimeout(() => {
                    //update image in hands class 
                    playerHandImage.src = `./img/${button.textContent}.png`
                    computerHandImage.src = `./img/${computerHand}.png`

                    handsControl(button.textContent, computerHand)

                }, 300);
            });
        });
    }
    //compare hands 
    const handsControl = (playerHands, computerHands) => {
        if (playerHands !== computerHands) {
            if (playerHands === "rock") {
                if (computerHands === "paper") {
                    computerScore++;
                    updateScore()
                }
                else {
                    playerScore++;
                    updateScore()
                }
            }
            if (playerHands === "scissors") {
                if (computerHands === "rock") {
                    computerScore++;
                    updateScore()
                }
                else {
                    playerScore++;
                    updateScore()
                }
            }
            if (playerHands === "paper") {
                if (computerHands === "scissors") {
                    computerScore++
                    updateScore()
                }
                else {
                    playerScore++;
                    updateScore()
                }
            }
        }
        else {
            document.querySelector(".match .tie").textContent = "Beraberlik"
        }

    }
    //Score table 
    const updateScore = () => {

        const player = document.getElementById("playerScore");
        const computer = document.getElementById("computerScore");
        //integer cast to string
        player.textContent = playerScore.toString();
        computer.textContent = computerScore.toString();

        if (playerScore === 3 || computerScore === 3) {
            match.classList.add("endGame")
            if (playerScore == 3)
                restartMatch(match, "Player");
            else
                restartMatch(match, "Computer");
        }
    }
    //End Game
    const restartMatch = (match, winner) => {
        const restartMatch = document.getElementById('restart');
        const buttonRestart = document.getElementById("restart");
        const winnerText = document.getElementById("winner");
        //add restart box on window
        restartMatch.style.display = "flex"
        winnerText.textContent = winner.toUpperCase();

        buttonRestart.addEventListener("click", () => {
            restartMatch.style.display = "none"
            match.classList.remove("endGame") //remove opacity from match
            Match()
        })
    }
    startGame();
}
Main()
/*TODO :
    - İsimler düzeltilecek
    - score tablosu oyun bittiğinde 0 olucak
    - berabere yazısı gelicek
 */