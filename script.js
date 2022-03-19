'use strict';

const highscoreText = document.querySelector(".highscore").textContent;
const check = document.querySelector(".check");
const scoreText = document.querySelector(".score");
const secret = document.querySelector("#secret");
const showRules = document.querySelector(".show-rules");
const HideRules = document.querySelector(".close-rules");

 const ESCkeyRulesClose = (event) =>{
     event.key === 'Escape' ? document.getElementById("rules").style.display = "none" : "" ;
}


document.addEventListener('keydown', ESCkeyRulesClose);

showRules.addEventListener("click", function(){
    document.getElementById("rules").style.display = "block";
});

HideRules.addEventListener("click", function(){
    document.getElementById("rules").style.display = "none";
});



let secretNumber = Math.trunc(Math.random() * 20) +1;
let highscore = 0;
let score = 20;



const setMessage = function(message){
    document.querySelector(".hint").textContent = message;
}



const startGuessing = function(){
    const GuessValue = Number(document.querySelector(".guess").value);
    if(!GuessValue){
        setMessage("Enter a Number..........");
    }
    else{
        if(score>1){
            if( GuessValue === secretNumber){
                setMessage("Correct Guess");
                check.disabled = true;
                secret.textContent = secretNumber;
                
                if(score > highscore)
                {
                    highscore = score;
                    document.querySelector(".highscore").textContent = score ;
                }

                document.querySelector("body").style.backgroundColor = "#80ed99";
                document.querySelector(".btn").style.backgroundColor = "#006400";
                document.querySelector(".again").style.backgroundColor = "#006400";
                document.querySelector(".check").style.backgroundColor = "#006400";
                document.querySelector(".mark").style.backgroundColor = "#8ac926";
                document.querySelector(".guess").style.backgroundColor = "#8ac926";
               
            }
            else if(GuessValue<1 || GuessValue > 20){
                setMessage("Enter value between 1 and 20");
            }
    
            else{
                GuessValue > secretNumber ? setMessage("Too High") : setMessage("Too Low");
                score--;
                scoreText.textContent = score;
            }
        }

        else {
            setMessage("Game Over...");
            check.disabled = true;
            scoreText.textContent = 0;
        }


    }
};


const again = function(){
    setMessage("Guess the Number!!!");
    check.disabled = false;
    scoreText.textContent = 20;
    score = 20;
    document.querySelector(".guess").value = "";
    secretNumber = Math.trunc(Math.random() * 20) +1;
    secret.textContent = "?";
    document.querySelector("body").style.backgroundColor = "#39A2AE";
    document.querySelector(".btn").style.backgroundColor = "#28737B";
    document.querySelector(".again").style.backgroundColor = "#28737B";
    document.querySelector(".check").style.backgroundColor = "#28737B";
    document.querySelector(".mark").style.backgroundColor = "#C1E7EB";
    document.querySelector(".guess").style.backgroundColor = "#C1E7EB";
    
}


document.querySelector(".again").addEventListener("click", again);

check.addEventListener("click",startGuessing);