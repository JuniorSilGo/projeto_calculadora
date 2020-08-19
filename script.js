
//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector("#display");

let botaoUm = document.querySelector("#numeroUm");
let botaoSoma = document.querySelector("#soma");
let botaoIgual = document.querySelector("#igual");
let botaoDois = document.querySelector("#numeroDois");

let acumulador = "";

botaoUm.onclick = function() {
    calculadora.display.innerText += 1;
}
botaoDois.onclick = function() {
    calculadora.display.innerText += 2;
}
botaoTres.onclick = function() {
    calculadora.display.innerText += 3;
}
botaoQuatro.onclick = function() {
    calculadora.display.innerText += 4;
}
botaoCinco.onclick = function() {
    calculadora.display.innerText += 5;
}
botaoSeis.onclick = function() {
    calculadora.display.innerText += 6;
}
botaoSete.onclick = function() {
    calculadora.display.innerText += 7;
}
botaoSoma.onclick = function() {
    acumulador += calculadora.display.innerText;
    acumulador += " + ";
    calculadora.display.innerText = "";
}

botaoIgual.onclick = function() {
    //TODO: checar se existe conteúdo dentro do display

    //colocando conteúdo do display no acumulador
    acumulador += calculadora.display.innerText;
    //resolvendo conta (conteúdo acumulador)
    let resultado = eval(acumulador);
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = resultado;
    // limpando o acumulador
    acumulador = "";

}
