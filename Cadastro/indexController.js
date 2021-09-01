// Variáveis
var lista = [{nome: "Luiz", email: "teste@gmail.com", telefone: "(99) 99999-9999", endereco: "Presidente Lima", cidade: "VILA VELHA"},
             {nome: "Paulo", email: "teste2@gmail.com", telefone: "(55) 55555-5555", endereco: "Coronel Sodré", cidade: "VITÓRIA"}]

function novo() {
    window.location.href = "form.html"
}



//listar tabela
function listar() { 
    
    var tbody = document.getElementById('tbody')
    
    if(tbody !== null){
        tbody.innerText = '';
    }

    for(let i = 0; i < lista.length; i++) {
        let tr = tbody.insertRow(); 

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_email = tr.insertCell();
        let td_telefone = tr.insertCell();
        let td_endereco = tr.insertCell();
        let td_cidade = tr.insertCell();

        td_id.innerText = i + 1;
        td_nome.innerText = lista[i].nome;
        td_email.innerText = lista[i].email;
        td_telefone.innerText = lista[i].telefone;
        td_endereco.innerText = lista[i].endereco;
        td_cidade.innerText = lista[i].cidade;
    }

    let data = new Date();
    
    document.getElementById('data').innerHTML = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

}



// get buscando no servidor
// function buscar() {
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://viacep.com.br/ws/88040400/json');

//     xhr.onreadystatechange = (response) => {
//         if(xhr.readyState == 4) { 
//             if(xhr.status == 200) { 
//                 console.log(JSON.parse(xhr.responseText));
//                 lista.push(response.data);
//                 listar();
//             }
//         }
//     };

//     xhr.send();
// }

