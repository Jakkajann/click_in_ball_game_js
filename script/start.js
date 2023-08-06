const maxWidth = window.innerWidth - 150;
const maxHeight = window.innerHeight - 150;
let scoreValue = 0;
let lives = 5;


function createBall() {
    
    const posX = String(Math.round(Math.random() * maxWidth));
    const posY = String(Math.round(Math.random() * maxHeight));
    const sizeFactor = (Math.random() * 5) + 1.01;
    const startWidth = 20;
    const startHeight = 20;
    let clicked = false;

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
        clicked = true;
    });

    document.querySelector("body").appendChild(ball);
}

let time = 3000;
while (lives > 0) {
    setTimeout(createBall, time);
    time -= 100;
}
