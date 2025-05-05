var scissor = document.querySelector("#scissor");
var paper = document.querySelector("#paper");
var rock = document.querySelector("#rock");
var human = document.querySelector(".human")
var humanScore = document.querySelector(".human-score")
var playBtn = document.querySelector(".play-btn");
var computer = document.querySelector(".computer")
var computerScore = document.querySelector(".computer-score")
var msg = document.querySelector(".msg")
var resetBtn = document.querySelector(".reset-btn")
var clicked = 0;
var playrScore = 0;
var compScore = 0;

scissor.addEventListener("click", () => {
    clicked = 1;
    human.innerText = "✌️"
})
paper.addEventListener("click", () => {
    clicked = 2;
    human.innerText = "✋"
})
rock.addEventListener("click", () => {
    clicked = 3;
    human.innerText = "✊"
})


playBtn.addEventListener("click", () => {

    let random = Math.ceil((Math.random() * 3))
    if (human.innerText !== "") {
        console.log(clicked)
        if (random === 1) {
            computer.innerText = "✌️"
        }
        else if (random === 2) {
            computer.innerText = "✋"
            if (clicked === 2) {
                msg.innerText = "Draw ! Play again "
            }
        }
        else if (random === 3) {
            computer.innerText = "✊"
            if (clicked === 3) {
                msg.innerText = "Draw ! Play again "
            }
        }
        scoreCard(random);
    }
})

var scoreCard = (random) => {
    if (clicked === 1) {
        if (random === 1) {
            msg.innerText = "Draw ! Play again"
        }
        else if (random === 2) {
            msg.innerText = "Congratulation ! You Won"
            playrScore++;
        }
        else {
            msg.innerText = "Computer Won"
            compScore++;
        }
    }
    else if (clicked === 2) {
        if (random === 1) {
            msg.innerText = "Computer Won!"
            compScore++;
        }
        else if (random === 2) {
            msg.innerText = "Draw ! Play again"
        }
        else {
            msg.innerText = "Congratulation ! You Won"
            playrScore++;
        }
    }
    else{
        if (random === 1) {
            msg.innerText = "Congratulation ! You Won"
            playrScore++;
        }
        else if (random === 2) {
            msg.innerText = "Computer Won!"
            compScore++;
        }
        else {
            msg.innerText = "Draw ! Play again"
        }
    }
    humanScore.innerText = `${playrScore}`;
    computerScore.innerText = `${compScore}`;
}
resetBtn.addEventListener("click",() =>{
    playrScore = 0;
    compScore = 0;
    humanScore.innerText = `${playrScore}`;
    computerScore.innerText = `${compScore}`;
    msg.innerText = " "
})