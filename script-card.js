//Function de geração de Identificador único
function gerarId(nome){
    let slug = nome
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, "-")
    //.replace(" ", "-")
    ;
    return "cartao-"+slug;
}

//Criação das tags que compõe o card do aluno
function criarCartao() {
   
//pegar os valores do formulário
let nome = document.getElementById("nome").value;
let curso = document.getElementById("curso").value;
let frase = document.getElementById("frase").value;
let fotoUrl = document.getElementById("foto").value;
let aviso = document.getElementById("aviso");

//Validação para garantir que todos os campos foram preenchidos
// if/else 
let camposPreenchidos = (nome !== "" && curso !== "" && frase !== "" && fotoUrl !== "");

if (!camposPreenchidos) {
    aviso.textContent = "Por favor, preencha todos os campos do formulário.";
    return; //interrompe a execução e sai da função
}
console.log(camposPreenchidos);
//criar o elemento div do card

let id = gerarId(nome);
console.log(id);

let jaExisteCard = document.getElementById(id) !== null;

//validar

if(jaExisteCard) {
    aviso.textContent = "Cartão existente!";
    return;
}

  //criação do cartão
  let cartao = document.createElement("div");
  cartao.className = "cartao";
  cartao.id = id;

  let foto = document.createElement("img");
  foto.className = "foto";
  foto.src = fotoUrl;
  foto.alt = "Avatar de " + nome;

  let tituloNome = document.createElement("h2");
  tituloNome.textContent = nome;

  let paragrafoCurso = document.createElement("p");
  paragrafoCurso.textContent = curso;

  let paragrafoFrase = document.createElement("p");
  paragrafoFrase.classList = ["oculto", "saibaMais"];
  paragrafoFrase.textContent = frase;

  //INCLUIR BUTTONS

  //Encaixar os elementos criadas

  cartao.appendChild(foto);
  cartao.appendChild(tituloNome);
  cartao.appendChild(paragrafoCurso);
  cartao.appendChild(paragrafoFrase);

  console.log(cartao);

  document.getElementById("galeria").appendChild(cartao);

}

//function gerarHTML
