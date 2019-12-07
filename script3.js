//BUTTONCADERNO FUNCIONALIDAD: BUTTON AGREGAR CREA UNA LI EN EL MISMO
//ESPACIO DONDE ESTÁ EL BUTTONCADERNO//

// const buttonCadernos = document.getElementById("button-cadernos");

// const inputValue = document.getElementById("input-cadernos-texto");
// const buttonAgregar = document.getElementById("button-agregar");
// const adicioneTexto = document.getElementById("input-caderno-texto");


const buttonAgregar = document.getElementById("button-agregar");
const tituloInput= document.getElementById("tituloInput") 
const error = document.querySelector(".error");

buttonAgregar.addEventListener("click", function(evento){
    console.log("agregar")
    let tabela = document.getElementById("Tabela");
    let titulo= tituloInput.value;
    evento.preventDefault();
    if (titulo === "") {
        error.textContent = "Digite o título da sua matéria!"
    } else {
        let liTabela = document.createElement("li");
        liTabela.textContent = titulo;
        tabela.appendChild(liTabela);
        tabela = "";
        error.textContent = "";
    }
});




// btnCriarCadernos = document.getElementById("button-cadernos")

// btnCriarCadernos.addEventListener("click", function (evento){
//         let buttonCaderno= document.createElement("button");
//         buttonCaderno.classList.add("btn-cadernos");
//         inputCadernoTexto.appendChild(buttonCaderno);
//         inputCadernoTexto = "";
//         error.textContent = "";
//     }

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
