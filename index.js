let scissor = document.querySelector("#scissor");
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let human = document.querySelector(".human")
let humanScore = document.querySelector(".human-score")
let playBtn = document.querySelector(".play-btn");
let computer = document.querySelector(".computer")
let computerScore = document.querySelector(".computer-score")
let msg = document.querySelector(".msg")
let resetBtn = document.querySelector(".reset-btn")
let borderColour = document.querySelectorAll("span")
let clicked = 0;
let playrScore = 0;
let compScore = 0;

scissor.addEventListener("click", () => {
    clicked = 1;
    human.innerText = "✌️"
    giveBorderColor(clicked)
})
paper.addEventListener("click", () => {
    clicked = 2;
    human.innerText = "✋";
    giveBorderColor(clicked)
})
rock.addEventListener("click", () => {
    clicked = 3;
    human.innerText = "✊"
    giveBorderColor(clicked)
})

const giveBorderColor = (clicked) => {
    if (clicked === 1) {
       borderColour[0].classList.add("borderColor");
       borderColour[1].classList.remove("borderColor");
       borderColour[2].classList.remove("borderColor");
    }
    else if (clicked === 2){
        borderColour[1].classList.add("borderColor");
        borderColour[0].classList.remove("borderColor");
        borderColour[2].classList.remove("borderColor");
    }
    else{
        borderColour[2].classList.add("borderColor");
        borderColour[0].classList.remove("borderColor");
        borderColour[1].classList.remove("borderColor");
    }
}
const showScore = (playrScore, compScore) => {
    humanScore.innerText = `${playrScore}`;
    computerScore.innerText = `${compScore}`;
}

const showMsg = (randNum) => {
    if (clicked === 1) {
        if (randNum === 1) {
            msg.innerText = "Draw ! Play again"
        }
        else if (randNum === 2) {
            msg.innerText = "Congratulation ! You Won"
            playrScore++;
        }
        else {
            msg.innerText = "Computer Won!"
            compScore++;
        }
    }
    else if (clicked === 2) {
        if (randNum === 1) {
            msg.innerText = "Computer Won!"
            compScore++;
        }
        else if (randNum === 2) {
            msg.innerText = "Draw ! Play again"
        }
        else {
            msg.innerText = "Congratulation ! You Won"
            playrScore++;
        }
    }
    else {
        if (randNum === 1) {
            msg.innerText = "Congratulation ! You Won"
            playrScore++;
        }
        else if (randNum === 2) {
            msg.innerText = "Computer Won!"
            compScore++;
        }
        else {
            msg.innerText = "Draw ! Play again"
        }
    }
    showScore(playrScore, compScore);
}

const comChoice = () => {
    let random = Math.ceil((Math.random() * 3))
    if (random === 1) {
        computer.innerText = "✌️"
    }
    else if (random === 2) {
        computer.innerText = "✋"
    }
    else if (random === 3) {
        computer.innerText = "✊"
    }
    return random;
}

playBtn.addEventListener("click", () => {
    if (human.innerText !== "") {
        let randNum = comChoice();
        showMsg(randNum);

    }
    else {
        msg.innerText = "Select Choice"
    }
})

const reset = () => {
    playrScore = 0;
    compScore = 0;
    humanScore.innerText = `${playrScore}`;
    computerScore.innerText = `${compScore}`;
    msg.innerText = " "
    computer.innerText = " "
    human.innerText = " "
}

resetBtn.addEventListener("click", reset)