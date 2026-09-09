//adicionar() deve incluir um novo elemento na lista de tarefas

function adicionar() {
    const input = document.getElementById('novaTarefa');
    var texto = novaTarefa.value;

    if(texto.trim() === "") {
        alert("Por favor, digite alguma coisa na tarefa.");
        return; //interrompe a execução e sai da função
    }

    //criar um novo elemento li
    let item = document.createElement("li");
    item.textContent = texto;

    //remover o item

    //adicionar o elemento li à lista
    document.getElementById("listaTarefas").appendChild(item);

    //limpar o campo de entrada
    input.value = "";

}