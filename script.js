console.log("Hello Word!");

//Comentário de Linha

/* 
    Comentário de
    Várias linhas
*/

var olaMundo = "Olá Mundo!";
console.log(olaMundo);

/* 
    let = Declara uma variável em um determinado bloco de código
    const = Declara uma constante
*/

console.log(typeof(olaMundo)); // typeof = Vê o tipo da variável

let cor = "verde";

if (cor === "verde") {
    console.log("Siga");
} else {
    console.log("Pare");
}

cor = "amarelo";

switch (cor) {
    case "verde":
        console.log("Siga");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "vermelho":
        console.log("Pare");
        break;

    default:
        console.log("Quebrou");
}

let n = 5;

for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i * n}`);
}

function somar(x1, x2) {
    return x1 + x2;
}

let resultado = somar(1, 2);
console.log(resultado);

function calc(n1, n2, operator) {
    return eval( `${n1} ${operator} ${n2}`);
    // eval() = pega uma string e faz uma validação executando-a
}

let resultado2 = calc(1, 2, "-");
console.log(resultado2);

// Função Anônima
(function (y1, y2, operator) {
    return eval( `${y1} ${operator} ${y2}`);

}) (1, 2, "*"); 

// Arrow Function
let calc2 = (z1, z2, operator) => {
    return eval( `${z1} ${operator} ${z2}`);
}

console.log(calc2(1, 2, "*"));

// Eventos com DOM
window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});


// Manipulação de Data
let agora = Date.now(); //Retorna um Time-Stump (mili-segundos contados de 01/01/1970 - agora)
console.log(agora);

let agora2 = new Date();
console.log(agora2.getDate());
console.log(agora2.getMonth()); //Inicia a contagem dos meses em 0
console.log(agora2.getFullYear());
console.log(agora2.toLocaleDateString("pt-BR")); //Formata a data em um padrão determinado

// Arrays
let carros = ["Palio 98", "Toro", "Uno", 10, true, new Date(), function(){}];
console.log(carros);
console.log(carros.length);
console.log(carros[5].getFullYear());

carros.forEach(function(value, index) {
    console.log(index, value);
});

// POO

//Cria uma classe
let celular = function() {

    this.cor = "prata"; // this. = Adiciona um atributo a um Objeto

    // Adiciona um método
    this.ligar = function() {
        console.log("Uma Ligação");
        return "Ligando...";
    }
}

let objeto = new celular();
console.log(objeto);
console.log(objeto.cor);
console.log(objeto.ligar());

class Celular2 {
    
    // Quando se cria uma classe, necessário o uso de um construtor para adicionar atributos a ela
    constructor() {
        this.cor = "preto";
    }

    ligar() {
            console.log("Uma Ligação");
            return "Ligando...";
    }
}

let objeto2 = new Celular2();
console.log(objeto2);
console.log(objeto2.cor);
console.log(objeto2.ligar());