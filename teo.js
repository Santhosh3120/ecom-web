const boxs = document.querySelectorAll('.box');
const playerStatus = document.querySelector('.status');
const restartBtn = document.getElementById('#Restart');

let x = "<imag src='download.png'>";
let o = "<imag src='o.png'>";
let player=x;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,4],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let options = ["","","","","","","","",""];
let currentPlayer= x;
let running = false;

init();

function init(){
boxs.forEach(box => box.addEventListener('click',boxClick));
running:true;
}
function boxClick(){
console.log(this.dataset.index);
}
function updateBox(){

}
function checkWinners(){

}
function restartGame(){

}
function changePlayers(){

}
