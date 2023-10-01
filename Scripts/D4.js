changeT = (t) => document.getElementById('t1').innerText = t;

function toggleBlock(itemId,displayMode) {
    const item = document.getElementById(itemId);
  if (item) {
    item.style.display = displayMode;
  }
}

function buttonGuess(){
    let num = Math.floor(Math.random() * 11);
    let numGuess = [];
    let msg = '';
    let i = 3;

    console.log(num);
    while (numGuess[i] != num && i > 0) {
        numGuess[i] = prompt("Insira um número de 0 a 10:");
        if (numGuess[i] == num) {
            toggleBlock('menu','none');
            msg = 'Parabéns, você adivinhou o número corretamente!';
            changeT(msg);
            i = -1;            
        } else if (numGuess != num && i > 0){
            i--;
            alert('Você tem '+(i)+' tentativas para adivinhar o número!');
            if(numGuess != num && i == 0) {
                toggleBlock('menu','none');
                msg = 'Que pena, não foi dessa vez, abra a página mais tarde e tente de novo!';
                changeT(msg);
                i = -1;
            }
        } 
    } 
                  
}