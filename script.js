
        /* function computerPlay returns a random outcome from the outcomes array as the computer's choice*/
        function computerPlay() {
        
            let outcomes = ["rock", "paper", "scissors"];

            let randomOutcome = Math.floor(Math.random() * outcomes.length);

            return outcomes[randomOutcome];
        }

        let buttons = document.querySelectorAll('button');
        let playerSelection;        

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerSelection = button.id;
                computerSelection = computerPlay();

                game();                 
            })});        
        
        /* playerScore and computerScore variables present in playRound function to add score according to the victor and present it in the end of round 5 */
        let playerScore = 0;
        let computerScore = 0;

        /* Function containing conditionals with the possible results for the player's selection versus the computer's (including draw) and input which isn't valid (anything not part of the outcomes array) */
        function playRound() {
           
            if ((playerSelection === computerSelection)) {
                return("Draw! You both played the same hand.")
            }

            if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
                playerScore++;
                return("You win: " + playerSelection + " beats " + computerSelection + ".")
            }

            else {
                computerScore++;
                return("You lose: " + computerSelection + " beats " + playerSelection + ".")
            }
        }             

        function game() {           
            for ( i = 0; i < 1; i++ ) {
                displayResult();
            }
        }

        function resetScore() {
            playerScore = 0;
            computerScore = 0;
        }      

        function displayResult() {
            let newline = '\r\n';
            const container = document.querySelector('#container')
            const resultDisplay = document.createElement('div');
            const finalResult = document.createElement('span');
            resultDisplay.style.whiteSpace = "pre";
            resultDisplay.textContent =

                "The computer played " + computerSelection + "." + newline + "You played " + playerSelection + "." + newline +
                playRound(playerSelection, computerSelection) + newline +
                "Player: " + playerScore + newline +
                "Computer: " + computerScore +newline +
                "- - - - - - - - - - - - - - - - - - -";

            if (playerScore === 5 ) {
                    finalResult.textContent += ("[You win the game]");
                    resetScore();

            } else if ( computerScore === 5 ) {
                    finalResult.textContent += ("[You lose the game]");
                    resetScore();                    
            }   
            
            container.appendChild(resultDisplay);                   
            container.insertBefore(resultDisplay, container.firstChild);
            container.insertBefore(finalResult, resultDisplay);
        }        
