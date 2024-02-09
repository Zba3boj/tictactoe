let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
//player1 will always choose x and player2 will always choose 0

let turn = true;

const combination = [   [0 , 1 , 2], [0 , 3 , 6] , [0 , 4 , 8] , 
 [1 , 4 , 7] , [2 ,5 , 8], [2 , 4 , 6] , [3 , 4 , 5] , [6 , 7 , 8],
];

const resetGame = () => {
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hidden");
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn)
        { 
            box.innerText = "X";
            turn = false;
        }
        else 
        {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        winner();
    })
})
const disableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const display = (winner) => {
    msg.innerText = `${winner} is winner`;
    msgcontainer.classList.remove("hidden");
    disableboxes();
}

const winner = () => {
    for(let pattern of combination)
    {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != "")
        {
            if(p1 === p2 && p2 === p3)
            {
                display(p1);
            }
        }
    }
}
newgame.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);





















