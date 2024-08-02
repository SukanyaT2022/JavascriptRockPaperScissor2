//continue to fix next button if user does not choose either rock paper or scissor can not go next 

//step4
var round = 1
//
function increaseRound(){
    //limit 6 round
    if (round < 6){

    round = round + 1

    document.getElementById('increseRoundId').innerText = 'Round: ' + round
//go back there it show all image after click 
    document.getElementById("rockImgId").style.visibility = "visible"
    document.getElementById("paperImgId").style.visibility = "visible"
    document.getElementById("scissorImgId").style.visibility = "visible"

    document.getElementById('robotImgId').src = "https://images.unsplash.com/photo-1527430253228-e93688616381?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8fDA%3D" 

}
}


//step one

function showRock(){
    document.getElementById("rockImgId").style.visibility = "visible"
    document.getElementById("paperImgId").style.visibility = "hidden"
    document.getElementById("scissorImgId").style.visibility = "hidden"
    var robotChoice = robotSide()
    winOrDraw(1,robotChoice)//player choice-option1 line 32, robotchoice

}

function showPaper(){
    document.getElementById("rockImgId").style.visibility = "hidden"
    document.getElementById("paperImgId").style.visibility = "visible"
    document.getElementById("scissorImgId").style.visibility = "hidden"
    var robotChoice = robotSide()
    winOrDraw(2,robotChoice)//player choice-option2 line 36, robotchoice
}

function showScissor(){
    document.getElementById("rockImgId").style.visibility = "hidden"
    document.getElementById("paperImgId").style.visibility = "hidden"
    document.getElementById("scissorImgId").style.visibility = "visible"
    var robotChoice = robotSide()
    winOrDraw(3,robotChoice)//player choice-option3 line 41, robotchoice
}
//step 2
//show image on robot side

function robotSide(){
    
    var storeValueRobotRandom = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    //if 1 show rock image
if (storeValueRobotRandom == 1){
    document.getElementById("robotImgId").src = "https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja3xlbnwwfHwwfHx8MA%3D%3D"
    //2 paper
}else if (storeValueRobotRandom == 2){
    document.getElementById("robotImgId").src =  "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwZXJ8ZW58MHx8MHx8fDA%3D"
}else{
    //3 sciisor
    document.getElementById("robotImgId").src =  "https://images.unsplash.com/photo-1534978184044-62700a717864?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Npc3NvcnxlbnwwfHwwfHx8MA%3D%3D" 
}
return storeValueRobotRandom
}
//step 3
// result who winner or draw

function winOrDraw(playerChoice, robotChoice){
    if(playerChoice == robotChoice){
        document.getElementById('resultId').innerText=('Draw!')
    }else if (playerChoice == 1 && robotChoice == 2){
document.getElementById('resultId').innerText=('robot wins')
}else if (playerChoice == 1 && robotChoice == 3){
    document.getElementById('resultId').innerText=('player wins')
}else if (playerChoice == 2 && robotChoice == 1){
    document.getElementById('resultId').innerText=('player wins')
}else if (playerChoice == 2 && robotChoice == 3){
    document.getElementById('resultId').innerText=('robot wins')
}else if (playerChoice == 3 && robotChoice == 1){
    document.getElementById('resultId').innerText=('robot wins')
}else if (playerChoice == 3 && robotChoice == 2){
    document.getElementById('resultId').innerText=('player wins')
}

}
