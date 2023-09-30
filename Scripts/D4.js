let num = Math.floor(Math.random() * 11);

function toggleBlock(itemId,displayMode) {
    const item = document.getElementById(itemId);
  if (item) {
    item.style.display = displayMode;
  }
}

changeT = (t) => document.getElementById('t1').innerHTML = t;


function guessNum() {
    let i = 3;
    let numGuess = [];
    let msg = 'Você tem '+(i)+'tentativas para adivinhar um número de 0 a 10!';
    toggleBlock('t1', 'none');
    toggleBlock('menu', 'block');

    while (numGuess[i] != num && i > 0) {
        numGuess[i] = prompt("Insira um número de 0 a 10: ");

        if (numGuess[i] === num) {
            toggleBlock('ans1','block');
            i = 0;            
        } else if (numGuess =! num && i > 0){
            i--;
            changeT(msg)       
        } else if (numGuess =! num && i<=0){
            toggleBlock('ans2','block');
        }
    }
    
}

