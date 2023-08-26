/*  JokenPô */


let whoWin = document.querySelector('#whoWin')
let myScore = document.querySelector('#myScore')
let machineScore = document.querySelector('#machineScore')

let alexaChoice = document.querySelector('.alexaChoice')
let countWins = 0


function iPlay(myChoice){
        
    const machineChoice = machinePlay()
    gameResult(myChoice, machineChoice)

}

function machinePlay(){

    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

function gameResult(human, machine){
   
    alexaChoice.innerHTML = machine

    if(human === machine){
        
        whoWin.innerHTML = 'Empatou!'

    }else if((human === 'rock' && machine ==='scissors') ||
             (human === 'paper' && machine === 'rock') ||
             (human === 'scissors' && machine === 'paper')){
                
                countWins++
                whoWin.innerHTML = 'Você venceu!'
                myScore.innerHTML = countWins


             }else {

                
                countWins++
                whoWin.innerHTML = 'Alexa venceu!'
                machineScore.innerHTML = countWins
             }
}