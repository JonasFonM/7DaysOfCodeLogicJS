const nome =
prompt("Qual o seu nome?");

const idade =
prompt("Quantos anos você tem?");

const lingprog =
prompt("Qual linguagem de programação você está estudando?")

const gosta =
prompt("Você gosta de estudar "+lingprog+"?");

const greetings = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + lingprog + "!";

var congrats = ""

if(gosta.toUpperCase === "SIM"){
    congrats = "Muito bom! Continue estudado e você terá muito sucesso."
    } else{
        congrats = "Ahh que pena... Já tentou aprender outras linguagens?"
    }