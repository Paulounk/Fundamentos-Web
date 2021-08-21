let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Invalido!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Valido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1){
        txtEmail.innerHTML = "E-mail Invalido!"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Valido!"
        txtEmail.style.color = "green"
        emailOK = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Excedeu o limite de 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOK = true
    }

}

function enviar(){
    if(nomeOk == true && emailOK == true && assuntoOK == true){
        alert("E-mail enviado com sucesso!")
    }else{
        alert("Preencha os campos corretamente!")
    }
}
