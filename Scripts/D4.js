let num = Math.floor(Math.random() * 11);
let i = 3;
let numGuess = [];
let msg = '';

console.log(num);

changeT = (t) => document.getElementById('t1').innerHTML = t;

function toggleBlock(itemId,displayMode) {
    const item = document.getElementById(itemId);
  if (item) {
    item.style.display = displayMode;
  }
}

function guessNum() {
    numGuess[i] = prompt("Insira um número de 0 a 10:");
    i--;
    msg = 'Você tem '+(i)+' tentativas para adivinhar um número de 0 a 10!';
    changeT(msg);
}

function buttonGuess() {
    guessNum();

    if (numGuess[i] === num) {
        toggleBlock('ans1','block');
        toggleBlock('menu','none');
        i = 0;            
    } else if (numGuess =! num && i > 0){
        changeT(msg)
    } else if (numGuess =! num && i<=0){
        toggleBlock('ans2','block');
        toggleBlock('menu','none');
    }
       
}