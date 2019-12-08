//BUTTON FERRAMENTAS CON FUNCIONALIDAD DE MENÚ DESPLEGABLE//

// const buttonFerramentas = document.getElementById("ferramentas-geral");
// buttonFerramentas.addEventListener("click", function(){
//     console.log("click")
//     $(".btn-cadernos").slideDown(1000); 
//     $(".btn-cadernos").on("click", function(){
//     $(this).hide(btn-cadernos);
//     })
// })

const ferramentas = document.getElementById("ferramentas-geral");
const btnCadernos = document.getElementById("div1");


$(function(){
    
    $("#ferramentas-geral").click(function(){
        console.log('click')    
        $("#div1").slideToggle(1000);          
    })

})



//BUTTONCADERNO FUNCIONALIDAD: BUTTON AGREGAR CREA UNA LI EN EL MISMO
//ESPACIO DONDE ESTÁ EL BUTTONCADERNO//

const buttonAgregar = document.getElementById("button-agregar");
const tituloInput= document.getElementById("tituloInput") 
const error = document.querySelector(".error");
buttonAgregar.addEventListener("click", function(evento){
    console.log("agregar")
    let tabela = document.getElementById("Tabela");
    let titulo= tituloInput.value;
    evento.preventDefault();
    if (titulo === "") {
        error.textContent = "Digite o titulo da sua matéria!"
    } else {
        let buttonTabela = document.createElement("button");
        buttonTabela.textContent = titulo;
        buttonTabela.classList.add("btn-cadernos");
        tabela.appendChild(buttonTabela);
        tabela = "";
        error.textContent = "";
        // let linkInput = document.createElement('a');
        // linkInput.classList.add("btn-cadernos")
        // linkInput.textContent = titulo;
        // tabela.appendChild(linkInput);
    }

})


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

