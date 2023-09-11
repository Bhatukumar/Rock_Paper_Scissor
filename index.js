const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener('click',()=>handleClick("ROCK"));
paper.addEventListener('click',()=>handleClick("PAPER"));
scissor.addEventListener('click',()=>handleClick("SCISSOR"));

let winCount =0;
let loseCount =0;
let playCount =0;

function handleClick(playerSelection){
    let list = ["ROCK","PAPER","SCISSOR"]
    const computerSelection = list[(Math.floor(Math.random()*list.length))];
    // console.log(computerSelection);
    playCount++;
    if(playCount<5){
        game(playerSelection,computerSelection);
    }else{
        if(winCount>loseCount){
            alert("Congratulation, You win")
        }else if(winCount===loseCount){
            alert("Played will.")
        }
        else{
            alert("Better Luck Next Time.")
        }
        playCount=0;
        winCount=0;
        loseCount=0;
    }
}


function game(playerSelection,computerSelection){
    if(playerSelection==='ROCK' && computerSelection==='PAPER'){
        loseCount++;
    }
    else if(playerSelection==='PAPER' && computerSelection==='SCISSOR'){
        loseCount++;
    }
    else if(playerSelection==='SCISSOR' && computerSelection==='ROCK'){
        loseCount++;
    }
    else{
        winCount++;
    }
    document.getElementById("winner").innerHTML=winCount;
    document.getElementById("losser").innerHTML=loseCount;
}
