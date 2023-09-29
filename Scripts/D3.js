let area ="", lang ="", spec = "";
const listaTech = [];
var i = 0;

const form = document.getElementById('f1');
const inputField = document.getElementById('inputField');

const question2 = "Qual linguagem você gostaria de aprender?";
const question3 = "Você pretende se especializar em "+lang+" ou se tornar Fullstack?";
const question4 = "Tem mais alguma tecnologia que gostaria de aprender?";
const question5 = "Qual tecnologia?";
const question6 = "Confira seu caminho no aprendizado Tech:";

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

changeQ6 = () => document.getElementById('question').innerHTML = question6;


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
    spec = "Fullstack";
    moreTech = true;
    changeQ5();    
    toggleVis('m5','hidden');
    toggleVis('f1','visible'); 
}

function button10() {
    spec = lang;
    changeQ6();
    toggleBlock('m5','none');
    toggleBlock('r1','block');
}