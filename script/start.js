const maxWidth = window.innerWidth - 150;
const maxHeight = window.innerHeight - 150;
const initialTime = 2000;
const gameOver = document.querySelector(".game-over");
let time = initialTime;
let scoreValue = 0;
let lives = 5;


function reset() {

    gameOver.style.display = "none";
    const lifeList = document.querySelector("ul");
    for(let i=0; i<5; i++) {
        const newLife = document.createElement("li");
        newLife.innerHTML = "&#9829";
        lifeList.appendChild(newLife);
    }
    lives = 5;
    scoreValue = 0;
    time = initialTime;
    createBall();
}


function createBall(interval) {

    if (document.querySelector(".ball")) {
        document.querySelector(".ball").remove();
        
        time = initialTime;
        if (lives > 0) {
            lives--;
            const livesElement = document.querySelector("ul li:last-child");
            livesElement.remove();
            if (lives === 0) {
                gameOver.style.display = "flex";
                clearInterval(interval);
                return;
            }
        }
    }
    
    const posX = String(Math.round(Math.random() * maxWidth));
    const posY = String(Math.round(Math.random() * maxHeight));
    const sizeFactor = (Math.random() * 1.5) + 1.01;
    const startWidth = 40;
    const startHeight = 40;

    const score = document.querySelector("#scoreValue");

    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.position = "absolute";
    ball.style.top = posY + "px";
    ball.style.left = posX + "px";
    ball.style.width = String(startWidth * sizeFactor) + "px";
    ball.style.height = String(startHeight * sizeFactor) + "px";

    ball.addEventListener("click", () => {
        scoreValue++;
        score.innerHTML = scoreValue;
        ball.remove();
        if(time > 500){ time -= time*0.025; }
    });

    document.querySelector("body").appendChild(ball);
    clearInterval(interval);
    const newInterval = setInterval(() => {
        createBall(newInterval);
    }, time);
}

createBall();