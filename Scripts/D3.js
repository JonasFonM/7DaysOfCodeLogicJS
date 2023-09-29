var area = "";
var lang = "";
var spec = "";
var confirm = "Sim";
var tech = "";
var listaTech = [];
var i = 0;
var questionConfig = "";
var b1Config = "";
var b2Config = "";

const question2 = "Qual linguagem você gostaria de aprender?";
const question3 = "Você pretende se especializar em "+lang+" ou se tornar Fullstack?";
const question4 = "Tem mais alguma tecnologia que gostaria de aprender?";

hideForm = () => document.getElementById('f1').style.visibility = "hidden";

showForm = () => document.getElementById('f1').style.visibility = "visible";

hideButtons = () => document.getElementById('m1').style.visibility = "hidden";

showButtons = () => document.getElementById('m1').style.visibility = "visible";

function buttonConfig(questionConfig, b1Config, b2Config){
    document.getElementById('question').innerHTML = questionConfig;
    document.getElementById('b1').innerHTML = b1Config;
    document.getElementById('b2').innerHTML = b2Config;
}

function button1() {
        
    if(area == "") {
        area = "Front-End";
        buttonConfig(question2,"React","Vue");
    } 
    else if(area == "Front-End" && lang == ""){
        lang = "React";
        buttonConfig(question3, lang, "Fullstack");
    } 
    else if(area == "Back-End" && lang == ""){
        lang = "C#";
        buttonConfig(question3, lang, "Fullstack");
    }
    else if(lang != "" && spec == ""){
        spec = lang;
        buttonConfig(question4,"Sim","Não")
    }
     else if(spec != ""){
       showForm();
       hideButtons();
    }
}

function button2(){
    if(area == "") {
        area = "Back-End";        
        buttonConfig(question2,"C#","Java");
    }
    else if(area == "Front-End" && lang == ""){
        lang = "Vue";
        buttonConfig(question3, lang, "Fullstack");
    } 
    else if(area == "Back-End" && lang == ""){
        lang = "Java";
        buttonConfig(question3, lang, "Fullstack");
    }
    else if(lang != "" && spec == ""){
        spec = lang;
        buttonConfig(question4,"Sim","Não")
    } 
    else if(spec != ""){
        hideForm();
        hideButtons();
        }
}

function addTech() {
    listaTech[i] = document.getElementById('input').value; 
    i++;         
}