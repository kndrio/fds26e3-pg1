//variável 
var nome = 'Beltrano';
let apelido = 'Sicrano';
const sobrenome = ' Da Silva';

//execução ou chamada da função
saudacao(nome);

//Função nomeada ou função declarada
function saudacao(nome) {
    console.log(nome, apelido, sobrenome);
    nome = "Fulano;"
    console.log("Olá, seja bem-vindo(a) " + nome + " !"  );
}

//console.log(nome);

//expressa
const oiMundo = function () {
    console.log("Oi, " + nome + apelido + sobrenome);
}

oiMundo();

function alternarCartao(idDoCartao) {
    //pega id a partir do ID recebido / passado
    let cartao = document.getElementById(idDoCartao);

    //dentro dele achar o paragrafo extra
    let extra = cartao.querySelector(".oculto");

    //console.log(cartao, extra);
    console.log('extraDisplay:', extra.style.display);
    
    //verificar se está oculto ou não
    if (extra.style.display === "none") {
        //exibir
        extra.style.display = "block";
    } else {
        //ocultar
        extra.style.display = "none";
    }

}