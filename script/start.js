const maxWidth = window.innerWidth - 150;
const maxHeight = window.innerHeight - 150;
let scoreValue = 0;


function getPos() {
    
    const posX = Math.round(Math.random() * maxWidth);
    const posY = Math.round(Math.random() * maxHeight);

    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.position = "absolute";
    ball.style.top = String(posY) + "px";
    ball.style.left = String(posX) + "px";

    ball.addEventListener("onclick", () => {

    })
    return ball;
}


document.body.appendChild(getPos());

const score = document.querySelector("#scoreValue");

console.log(score.innerHTML);