//variável 
var nome = 'Beltrano';
let apelido = 'Sicrano';
const sobrenome = ' Da Silva';

//execução ou chamada da função
//saudacao(nome);

//Função nomeada ou função declarada
function saudacao(nome) {
    //console.log(nome, apelido, sobrenome);
    nome = "Fulano;"
    //console.log("Olá, seja bem-vindo(a) " + nome + " !"  );
}

//console.log(nome);

//expressa
const oiMundo = function () {
    console.log("Oi, " + nome + apelido + sobrenome);
}


//funcão declarada de calculo de média de 2 números
function calcularMedia(a, b) {
    return (a + b) / 2;
}

//console.log(calcularMedia(100, 50));

//arrow function
const somar = (a , b) => {
    return a + b;
}

//console.log(somar(100, 50));

//oiMundo();

function alternarCartao(idDoCartao) {
    //pega id a partir do ID recebido / passado
    let cartao = document.getElementById(idDoCartao);

    //dentro dele achar o paragrafo extra
    let extra = cartao.querySelector(".saibaMais");

    //Chaveamento da exibição da classe
    extra.classList.toggle("oculto");

    /**
     * 
     const estaOculto = extra.classList.contains("oculto");

    //console.log(cartao, extra);
    console.log('Está oculto?', estaOculto);

     * 1. verificar se está oculto ou não
    if (estaOculto) {
        //exibir
        extra.classList.remove("oculto");
        console.log('Classe .oculto removido');
    } else {
        //ocultar
        extra.classList.add("oculto");
        console.log('Classe .oculto adicionada');
    }
    */


}
