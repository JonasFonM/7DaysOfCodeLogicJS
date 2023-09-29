var area = "";
var lang = "";
var spec = "";
var moreTech = true;
var listaTech = [];

const question2 = "Qual linguagem você gostaria de aprender?";
const question3 = "Você pretende se especializar em "+lang+" ou se tornar Fullstack?";
const question4 = "Tem mais alguma tecnologia que gostaria de aprender?";

hideForm = () => document.getElementById('f1').style.visibility = "hidden";

showForm = () => document.getElementById('f1').style.visibility = "visible";

hideMenu1 = () => document.getElementById('m1').style.visibility = "hidden";

showMenu1 = () => document.getElementById('m1').style.visibility = "visible";

hideMenu2 = () => document.getElementById('m2').style.display = "none";

showMenu2 = () => document.getElementById('m2').style.display = "block";

hideMenu3 = () => document.getElementById('m3').style.display = "none";

showMenu3 = () => document.getElementById('m3').style.display = "block";

hideMenu4 = () => document.getElementById('m4').style.display = "none";

showMenu4 = () => document.getElementById('m4').style.display = "block";

hideMenu5 = () => document.getElementById('m5').style.display = "none";

showMenu5 = () => document.getElementById('m5').style.display = "block";

changeQ2 = () => document.getElementById('question').innerHTML = question2;

changeQ3 = () => document.getElementById('question').innerHTML = question3;

changeQ4 = () => document.getElementById('question').innerHTML = question4;


function button1() {
    area = "Front-End";
    changeQ2();
    hideMenu1();
    showMenu2();
}

function button2(){
    area = "Back-End";
    changeQ2();
    hideMenu1();
    showMenu3();
}

function button3() {
    lang = "React";
    changeQ3();
    hideMenu2();
    showMenu4();
}

function button4(){
    lang = "Vue";
    changeQ3();     
    hideMenu2();
    showMenu4();
}

function button5() {
    lang = "C#";
    changeQ3();
    hideMenu3();
    showMenu4();
}

function button6(){
    lang = "Java";
    changeQ3();     
    hideMenu3();
    showMenu4();
}

function button7() {
    spec = lang;
    changeQ4();
    hideMenu4();
    showMenu5();
}

function button8(){
    spec = "Fullstack";
    changeQ4();     
    hideMenu4();
    showMenu5();
}

function addTech() {
    var i = 0;
    do {
    listaTech[i] = document.getElementById('input').value; 
    i++;         
    } while (moreTech == true);
         
}