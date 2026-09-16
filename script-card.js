//Criação das tags que compõe o card do aluno
function criarCartao() {
   
//pegar os valores do formulário
var nome = document.getElementById("nome").value;
var curso = document.getElementById("curso").value;
var frase = document.getElementById("frase").value;
var foto = document.getElementById("foto").value;

//Validação para garantir que todos os campos foram preenchidos
// if/else 
var camposPreenchidos = (nome !== "" && curso !== "" && frase !== "" && foto !== "");

if (!camposPreenchidos) {
    alert("Por favor, preencha todos os campos do formulário.");
    return; //interrompe a execução e sai da função
}
console.log(camposPreenchidos);
//criar o elemento div do card

//salvar no banco de dados (localStorage) os valores do formulário

}