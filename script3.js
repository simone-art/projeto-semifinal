//BUTTONCADERNO//

const buttonCadernos = document.querySelector(".btn-cadernos");
const error = document.querySelector(".error");

btnCriarCadernos = document.getElementById("button-cadernos")
// const texto = document.getElementById("adicione-caderno")

btnCriarCadernos.addEventListener("click", function (evento){
    let inputCadernoTexto = texto.value;
    evento.preventDefault();
    if (inputCadernoTexto === "") {
        erro.textContent= "error"
    } else{
        let buttonCaderno= document.createElement("button");
        buttonCaderno.textContent = inputCadernoTexto;
        buttonCaderno.classList.add("input-caderno");
        inputCadernoTexto.appendChild(buttonCaderno);
        inputCadernoTexto = "";
        error.textContent = "";
    }

    // console.log("criar")
    



//TEXTAREA//

// let textoCaderno = document.getElementById("cadernoReprograma")

//BUTTONSALVAR//

// const btnSalvar = document.getElementById("salvar")

// btnSalvar.addEventListener("click", function (evento){
//     evento.preventDefault();
//     console.log("salvar");
// })


//BUTTONNOVO/

// let btnNovo = document.getElementById("novo")

// btnSalvar.addEventListener("click", function (evento){
//     evento.preventDefault();
// })

// console.log("novo")
