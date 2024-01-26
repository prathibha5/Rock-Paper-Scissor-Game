const resetButton=document.getElementById("reset");
const ansArea=document.getElementById("ans-space")
const vsArea=document.getElementById("vs-space")
const scoreAreaPlayer=document.getElementById("player-score-space")
const scoreAreaComp=document.getElementById("comp-score-space")
const startbutton=document.getElementById("start")

var start=false;

var scoreObj={"playerScore":0,"computerScore":0}

startbutton.onclick=()=>{
    scoreObj["playerScore"]=0;
    scoreObj["computerScore"]=0;
    start=true;
    ansArea.innerText=""
    vsArea.innerText=""
    scoreAreaPlayer.innerText=""
    scoreAreaComp.innerText=""
    startbutton.innerText="🔵"
}

resetButton.onclick=()=>{
    start=false;
    startbutton.innerText="🟢"
    finalResult();
}

const optionsButton=document.querySelectorAll(".options button")

optionsButton.forEach(rpsButton=>{
    rpsButton.onclick=()=>{
        if(start!=true){
            alert("CLick the start button to get started !!")
        }
        else{
            onclickRPS(rpsButton.value)
        }  
    }
})



function getComputerChoice(){
    choices=["Rock","Paper","Scissor"]
    let choiceNumber=Math.floor(Math.random()*3)
    return choices[choiceNumber];
}

function getResult(playerChoice,computerChoice){
    let score=0;
    if(playerChoice==computerChoice){
        score=0;
        scoreObj["computerScore"]+=0;
    }
    else if(playerChoice=="Rock" && computerChoice=="Scissor"){
        score=1;
        scoreObj["computerScore"]-=1
    }
    else if(playerChoice=="Paper" && computerChoice=="Rock"){
        score=1;
        scoreObj["computerScore"]-=1
    }
    else if(playerChoice=="Scissor" && computerChoice=="Paper"){
        score=1;
        scoreObj["computerScore"]-=1
    }
    else{
        score=-1;
        scoreObj["computerScore"]+=1;
    }
    scoreObj["playerScore"]+=score;
    return score;

}

function showResult(score,playerChoice,computerChoice){
   if(score==0){
    ansArea.innerText=`Its a draw!`
    vsArea.innerText=`Computer-Choice🤖 : ${computerChoice}   ⚡   Your-Choice👧 : ${playerChoice}`
   }
   else if(score==1){
    ansArea.innerText=`You Win!`
    vsArea.innerText=`Computer-Choice🤖 : ${computerChoice}   ⚡   Your-Choice👧 : ${playerChoice}`
   }
   else if(score==-1){
    ansArea.innerText=`You Lose!`
    vsArea.innerText=`Computer-Choice🤖 : ${computerChoice}   ⚡   Your-Choice👧 : ${playerChoice}`
   }
}

function finalResult(){
    if(scoreObj["playerScore"]==scoreObj["computerScore"]){
        ansArea.innerText=`It's a draw!`
        vsArea.innerText="----------------------"
        scoreAreaPlayer.innerText=`Your-Total-Score:${scoreObj["playerScore"]}`
        scoreAreaComp.innerText=`Computer-Total-Score:${scoreObj["computerScore"]}`
    }
    else if(scoreObj["playerScore"]>scoreObj["computerScore"]){
        ansArea.innerText=`You Win`
        vsArea.innerText="----------------------"
        scoreAreaPlayer.innerText=`Your-Total-Score:${scoreObj["playerScore"]}`
        scoreAreaComp.innerText=`Computer-Total-Score:${scoreObj["computerScore"]}`
    }
    else if(scoreObj["playerScore"]<scoreObj["computerScore"]){
        ansArea.innerText=`You Lose! Better luck next time!`
        vsArea.innerText="----------------------"
        scoreAreaPlayer.innerText=`Your-Total-Score:${scoreObj["playerScore"]}`
        scoreAreaComp.innerText=`Computer-Total-Score:${scoreObj["computerScore"]}`
    }
    
}

function onclickRPS(playerChoice){
    let compChoice=getComputerChoice();
    let score=getResult(playerChoice,compChoice)
    showResult(score,playerChoice,compChoice)
}




