let name = document.getElementById("name")
let email = document.querySelector("#email")
let topic = document.querySelector("#topic")
let nameOk = false
let emailOk = false
let topicOk = false
let map = document.querySelector('#map')

name.style.width = "100%"
email.style.width = "100%"
topic.style.width = "100%"

//valida tamanho do nome
function nameValidation(){
    let textName = document.querySelector("#textName")

    if (name.value.length < 2){
        textName.innerHTML = "Nome inválido"
        textName.style.color = "red"
    } else {
        textName.innerHTML = "Nome válido"
        textName.style.color = "green"
        nameOk = true
    }
}

function emailValidation(){
    let textEmail = document.querySelector("#textEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        textEmail.innerHTML = "E-mail inválido"
        textEmail.style.color = "red"
    } else {
        textEmail.innerHTML = "E-mail válido"
        textEmail.style.color = "green"
        emailOk = true;
    }
}

function topicValidation(){
    let textTopic = document.querySelector("#textTopic")

    if(topic.value.length > 100){
        textTopic.innerHTML = "O texto é muito grande, digite no máximo 100 caracteres"
        textTopic.style.color = "red"
        textTopic.style.display = "block"
    } else {
        textTopic.style.display = "none"
        topicOk = true
    }
}

function send(){
    if (nameOk == true && emailOk == true && topicOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function zoomMap(){
    map.style.width = "150%"
}

function normalMap(){
    map.style.width = "100%"
}