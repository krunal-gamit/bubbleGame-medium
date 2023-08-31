let bubbleCount = "";
let timer = 60;
let hitVal;
function makeBubbles(){
for (let i=0; i<152; i++){
    let randNum = Math.floor(Math.random()*10);
    bubbleCount += `<div class="bubble">${randNum}</div>`;
}
document.querySelector('#bottomBar').innerHTML = bubbleCount;
}

function runTimer(){
   let clearTimer = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerVal").innerHTML = timer;
       }
       else{
        clearInterval(clearTimer);
       }
    },1000);
}

function hitUpdate(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerHTML = hitVal;
}

function updateScore(){
    let score = Number(document.querySelector("#scoreVal").textContent);
    score += 10;
    document.querySelector("#scoreVal").innerHTML = score;
}

makeBubbles();
runTimer();

document.querySelector("#bottomBar")
.addEventListener("click",function(det){
    let clickVal = Number(det.target.textContent);
    hitVal = Number(document.querySelector("#hitVal").textContent);        
    if( clickVal === hitVal){

        updateScore();
        hitUpdate();
        makeBubbles();
        console.log("sucess");
    }
})


