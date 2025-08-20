let tarefas = []
function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim() //o .trim irá retirar todos os espaços em branco ou seja irá retirar os espaços do inicio e do fim

    //mensagem de tarefa adicionada com sucesso


    const mensagem = document.getElementById("mensagem") //criação da varialvel mensagem


    if (tarefa == "") {

        let mensagemErro = "Digite uma tarefa para adiciona-la a sua lista!"
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "#A34743"; // altera a cor da mensagem

        // alert("ERRO! É necessário adicionar uma tarefa a sua lista!");
        //#A34743


    } else {

        //o código abaixo realiza a tarefa de adicionar tarefas através do input 
        //cria novo item (li) e insere na (lista ul)
        //const listaTarefas = document.getElementById("listaTarefas")
        //let novaTarefa = document.createElement("li")

        //novaTarefa.textContent = tarefa //criar tarefa

        //listaTarefas.appendChild(novaTarefa)  //criar lista

        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        tarefas.push(tarefa)

        mensagem.style.color = "#28a745";

        renderizarTarefas()

        //#28a745 

        //PRA MUDAR A COR USAR mensagem.textContente.style.color

    }

    inputTarefa.value = "" //limpa o input automaticamente
}
function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    //for (interador, condição.frequencia)

    let i = 0

    for (let i = 0; i < tarefas.length; i++) {

        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i] //criar tarefa

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa () //Arrow function para remover tarefa
        
       let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa (i) //Arrow function para remover tarefa
        

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)  //criar lista

    }

}

function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i){
   let tarefaEditada = prompt("Edite a tarefa:")
   if (tarefaEditada.trim() !== ""){
    tarefas[i] = tarefaEditada
    renderizarTarefas()
   }

}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso"
}