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

hideMenu2 = () => document.getElementById('m2').style.visibility = "hidden";

showMenu2 = () => document.getElementById('m2').style.display = "block";

hideMenu3 = () => document.getElementById('m3').style.display = "none";

showMenu3 = () => document.getElementById('m3').style.display = "block";

hideMenu4 = () => document.getElementById('m4').style.display = "none";

showMenu4 = () => document.getElementById('m4').style.display = "block";

function button1() {
    area = "Front-End";
    hideMenu1();
    showMenu2();
}

function button2(){
    area = "Back-End";
    hideMenu1();
    showMenu3();
}

function button3() {
    lang = "React";
    hideMenu2();
    showMenu4();
}

function button4(){
    lang = "Vue";     
    hideMenu2();
    showMenu4();
}

function button5() {
    lang = "C#";
    hideMenu3();
    showMenu4();
}

function button6(){
    lang = "Java";     
    hideMenu3();
    showMenu4();
}

/*
function addTech() {
    var i = 0;
    do {
    listaTech[i] = document.getElementById('input').value; 
    i++;         
    } while (moreTech == true);
         
}*/