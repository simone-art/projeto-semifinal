const adicioneNome= document.getElementById("adicioneNome")
const adicioneSobrenome= document.getElementById("adicioneSobrenome")
const adicioneEmail= document.getElementById("adicioneEmail")
const adicioneSenha= document.getElementById("adicioneSenha")
const confirmeSenha= document.getElementById("confirmeSenha")



// let adicioneNome= document.getElementById("adicioneNome")

adicioneNome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneNome.value.trim() == ""){
        adicioneNome.setAttribute("placeholder","Por favor, escribe tu nombre");
    }
})

// let adicioneSobrenome= document.getElementById("adicioneSobrenome")

adicioneSobrenome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSobrenome.value.trim() == ""){
        adicioneSobrenome.setAttribute("placeholder","Por favor, escribe tu apellido");
    } 
})



adicioneEmail.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneEmail.value.trim() == ""){
        adicioneEmail.setAttribute("placeholder","Por favor, escribe tu email");
    } 
})

adicioneSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSenha.value.trim() == ""){
        adicioneSenha.setAttribute("placeholder","Por favor, escribe tu contraseña");
    } 
})

confirmeSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (confirmeSenha.value.trim() == ""){
        confirmeSenha.setAttribute("placeholder","Por favor, confirme tu contraseña");
    }  
})

//BUTTON ENVIAR//


const btnEnviar = document.getElementById("form")

btnEnviar.addEventListener("click", function (evento){
    evento.preventDefault();
    if (adicioneNome.value=='' || adicioneSobrenome.value=='' || adicioneEmail.value=='' || adicioneSenha.value=='' || confirmeSenha.value=='') {
        // alert("Preencha todos os dados")
    }else {
        alert("Cadastro enviado com sucesso!")
        adicioneNome.value = ''
        adicioneSobrenome.value = ''
        adicioneEmail.value = ''
        adicioneSenha.value = ''
        confirmeSenha.value = ''
    }
  
})
            
  


