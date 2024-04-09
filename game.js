let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


let showWinner= (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else
    {
        msg.innerText=`You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
};
const draw=()=>{
    msg.innerText="It was a Draw";
    msg.style.backgroundColor="#081b31";
};
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
};
const playGame= (userChoice)=>{
        const compChoice=genCompChoice();
        if(userChoice===compChoice)
            draw();
        else
        {
            let userWin = true;
            if(userChoice==="rock")
                userWin= compChoice==="paper" ? false:true;
            else if(userChoice==="paper")
                userWin= compChoice==="scissors" ? false:true;
            else
                userWin= compChoice==="rock" ? false:true;
            showWinner(userWin,userChoice,compChoice);
        }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});