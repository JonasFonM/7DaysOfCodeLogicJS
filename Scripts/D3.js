let area ="", lang ="", spec = "";
const listaTech = [];
var i = 0;

const question2 = "Qual linguagem você gostaria de aprender?";
const question3 = "Você pretende se especializar em "+lang+" ou se tornar Fullstack?";
const question4 = "Tem mais alguma tecnologia que gostaria de aprender?";
const question5 = "Confira seu caminho no aprendizado Tech:";

function toggleBlock(itemId,displayMode) {
    const item = document.getElementById(itemId);
  if (item) {
    item.style.display = displayMode;
  }
}

function toggleVis(itemId,visMode) {
    const item = document.getElementById(itemId);
  if (item) {
    item.style.visibility = visMode;
  }
}

changeQ2 = () => document.getElementById('question').innerHTML = question2;

changeQ3 = () => document.getElementById('question').innerHTML = question3;

changeQ4 = () => document.getElementById('question').innerHTML = question4;

changeQ5 = () => document.getElementById('question').innerHTML = question5;

function button1() {
    area = "Front-End";
    changeQ2();
    toggleVis('m1','hidden');
    toggleBlock('m2','block');
}

function button2(){
    area = "Back-End";
    changeQ2();
    toggleVis('m1','hidden');
    toggleBlock('m3','block');
}

function button3() {
    lang = "React";
    changeQ3();
    toggleBlock('m2','none');
    toggleBlock('m4','block');
}

function button4(){
    lang = "Vue";
    changeQ3();
    toggleBlock('m2','none');
    toggleBlock('m4','block');
}

function button5() {
    lang = "C#";
    changeQ3();
    toggleBlock('m3','none');
    toggleBlock('m4','block');
}

function button6(){
    lang = "Java";
    changeQ3();   
    toggleBlock('m3','none');
    toggleBlock('m4','block');  
}

function button7() {
    spec = lang;
    changeQ4();
    toggleBlock('m4','none');
    toggleVis('m5','visible');
}

function button8(){
    spec = "Fullstack";
    changeQ4();     
    toggleBlock('m4','none');
    toggleVis('m5','visible');
}

function button9(){
    listaTech[i] = prompt("Qual tecnologia?");
    i++;
}

function button10() {
    changeQ5();
    showResults();
    toggleBlock('m5','none');
    toggleBlock('r1','block');
}

function showResults() {
    document.getElementById('area').innerHTML = area;
    document.getElementById('lang').innerHTML = lang;
    document.getElementById('spec').innerHTML = spec;

    for (let index = 0; index < listaTech.length; index++) {
    document.getElementById('techs').innerHTML += listaTech[index];
    }
}