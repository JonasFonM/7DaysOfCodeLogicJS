const nome =
prompt("Qual o seu nome?");

const idade =
prompt("Quantos anos você tem?");

const lingprog =
prompt("Qual linguagem de programação você está estudando?")

const gosta =
prompt("Você gosta de estudar "+lingprog+"?");

document.getElementById("greetings").innerHTML = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + lingprog + "!";