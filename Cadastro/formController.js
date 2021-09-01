let lista = [];

function voltar() {
    window.location.href = "index.html"
}

// Função salvar. Está apenas retornando para tela principal. 
function enviar() {
    let dados = {};

    dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value
    }
    
    lista.push(dados);

    voltar();

}

// Enviar Dados (Requisição). Não está sendo utilizado.
function enviarDados() {

    let dados = {};

    dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value
    }
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://', true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4) {

            if (xhr.status == 200) {
                console.log(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    }

    xhr.send(JSON.stringify(dados));
}