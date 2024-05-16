let boxes = document.querySelectorAll(".box");
let resrt = document.querySelector(".reset-btn");
let msg = document.querySelector(".winner");
let reset = document.querySelector(".reset-btn");
let main = document.querySelector(".main");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.remove("new-winner");
    main.classList.remove("new-main");
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = "";
        msg.innerText = "X/O";
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `${winner} Won!`
    msg.classList.add("new-winner");
    main.classList.add("new-main");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);

            }
        }
    }
};

reset.addEventListener("click", resetGame);