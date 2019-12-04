//formulario-regístrese//

// let adicioneNome= document.getElementById("adicioneNome")

adicioneNome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneNome.value.trim() == ""){
        adicioneNome.setAttribute("placeholder","Por favor, digite o seu nome");
    }
})

// let adicioneSobrenome= document.getElementById("adicioneSobrenome")

adicioneSobrenome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSobrenome.value.trim() == ""){
        adicioneSobrenome.setAttribute("placeholder","Por favor, digite o seu sobrenome");
    } 
})



adicioneRg.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneRg.value.trim() == ""){
        adicioneRg.setAttribute("placeholder","Por favor, digite o seu RG");
    } 
})

adicioneSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSenha.value.trim() == ""){
        adicioneSenha.setAttribute("placeholder","Por favor, insira a sua nova senha");
    } 
})

confirmeSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (confirmeSenha.value.trim() == ""){
        confirmeSenha.setAttribute("placeholder","Por favor, confirme a sua nova senha");
    }  
})

//BUTTON ENVIAR//

let btnEnviar = document.getElementById("form")

btnEnviar.addEventListener("click", function (evento){
    evento.preventDefault();
})
console.log("clicou")

