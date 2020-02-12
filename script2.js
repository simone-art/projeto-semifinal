
const adicioneNome= document.getElementById("adicioneNome")
const adicioneSobrenome= document.getElementById("adicioneSobrenome")
const adicioneEmail= document.getElementById("adicioneEmail")
const adicioneSenha= document.getElementById("adicioneSenha")
const confirmeSenha= document.getElementById("confirmeSenha")



// let adicioneNome= document.getElementById("adicioneNome")

adicioneNome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneNome.value.trim() == ""){
        // adicioneNome.setAttribute("placeholder","Por favor, digite o seu nome");
    }
})

// let adicioneSobrenome= document.getElementById("adicioneSobrenome")

adicioneSobrenome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSobrenome.value.trim() == ""){
        // adicioneSobrenome.setAttribute("placeholder","Por favor, digite o seu sobrenome");
    } 
})


// let adicioneEmail= document.getElementById("adicioneEmail")

adicioneEmail.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneEmail.value.trim() == ""){
        // adicioneEmail.setAttribute("placeholder","Por favor, digite o seu email");
    } 
})

// let adicioneSenha= document.getElementById("adicioneSenha")

adicioneSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSenha.value.trim() == ""){
        // adicioneSenha.setAttribute("placeholder","Por favor, insira a sua nova senha");
    } 
})

// let confirmeSenha= document.getElementById("confirmeSenha")

confirmeSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (confirmeSenha.value.trim() == ""){
        // adicioneSenha.setAttribute("placeholder","Por favor, insira a sua nova senha");
    } 
})


const formularioEnviar = document.getElementById("form")

formularioEnviar.addEventListener("submit", function (event){
    event.preventDefault();
    if (adicioneNome.value == 0
        || adicioneSobrenome.value == 0
        || adicioneEmail.value == 0 
        || adicioneSenha.value == 0 
        || confirmeSenha.value == 0) {
        // alert("por favor, preencha todos os seus dados pessoais")
    }else {
        alert("Cadastro enviado com sucesso!")
        adicioneNome.value = ''
        adicioneSobrenome.value = ''
        adicioneEmail.value = ''
        adicioneSenha.value = ''
        confirmeSenha.value = ''
    }
    console.log("funciona")
  
})

form.reset();


