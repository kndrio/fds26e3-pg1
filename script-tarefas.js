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
    //incluir o id do item
    item.id = texto;

    //incluir o botão diretamente no item
    var botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.className = "remover"; 

    //remover o item
    botaoRemover.onclick = function() {
        item.remove();
    }  

    //incluir um novo campo dentro da tarefa

    //adicionar o elemento li à lista
    item.appendChild(botaoRemover);
    document.getElementById("listaTarefas").appendChild(item);

    //limpar o campo de entrada
    input.value = "";

}