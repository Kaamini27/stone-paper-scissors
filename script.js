let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#user_score");
const computerScorePara= document.querySelector("#computer_score")
const genComputerChoice =()=>{
const options =["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const drawGame = ()=>{
  message.innerText = "game was draw. play again";
  message.style.backgroundColor="#081b31";
};
const showWinner = (userWin,computerChoice,userChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
   message.innerText = 'you win! your ${userChoice} beats ${computerChoice}';
    message.style.backgroundColor="green";
  }else{
    computerScore++;
    userScorePara.innerText=computerScore;
    message.innerText = 'you lost ${computerChoice} beats your ${userChoice}';
    message.style.backgroundColor="red";
  }
};
const playGame =(userChoice)=>{ 
  console.log("user choice=",userChoice);
  const computerChoice=genComputerChoice();
console.log("computer choice = ",computerChoice);
if(userChoice===computerChoice){
  drawGame();
}else{
  let userWin=true;
  if(userChoice==="rock"){
    userWin=computerChoice==="paper"?false:true;
  }else if(userChoice==="paper"){
    userWin=computerChoice==="scissors"?false:true;
  }else{
    computerChoice==="rock"?false:true;
  }
  showWinner(userWin,computerChoice,userChoice);
}
};
choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    console.log("choice was clicked",userChoice);
 });
});

