//BUTTON FERRAMENTAS CON FUNCIONALIDAD DE MENÚ DESPLEGABLE//

const ferramentas = document.getElementById("ferramentas-geral");
const btnCadernos = document.getElementById("div1");
// const editorTexto = document.getElementById("summernote")

$(function(){
    
    $("#div1").hide(function(){
        console.log('click')   
        $("#div1").hide();           
    })

})

$(function(){
    
    $(".tarea").hide(function(){  
        $(".tarea").hide();           
    })

})

// $(function(){
    
//     $("#summernote").hide(function(){
//         console.log('click')   
//         $("#summernote").hide();           
//     })

// })

$(function(){
    
    $(".btn-salvar").hide(function(){  
        $(".btn-salvar").hide();           
    })

})

$(function(){
    
    $(".btn-salvar").hide(function(){  
        $(".btn-novo").hide();           
    })

})

$(function(){
    
    $(".caderno-funcional").hide(function(){
        console.log('click')   
        $(".caderno-funcional").hide();           
    })
    $("#adicione-caderno").hide(function(){
        console.log('click')   
        $("#adicione-caderno").hide();           
    })
    $(".tarea").hide(function(){
        console.log('click')   
        $(".tarea").hide();           
    })

    $("#summernote").hide(function(){
        console.log('click')   
        $("#summernote").hide();           
    })

    $(".bnt-salvar").hide(function(){
        console.log('click')   
        $(".btn-salvar").hide();           
    })
    $(".bnt-novo").hide(function(){
        console.log('click')   
        $(".btn-novo").hide();           
    })

})

$(function(){
    $("#ferramentas-geral").click(function(){
        console.log('click')   
        $("#div1").slideToggle(1000); 
                 
    })

})

$(function(){
    $("#div1").click(function(){
        console.log('click')   
        $(".caderno-funcional").slideToggle(2000); 
        $("#adicione-caderno").slideToggle(4000);
        // $("#summernote").slideToggle(3700);
        $(".tarea").slideToggle(3500); 
        $(".btn-salvar").slideToggle(3200); 
        $(".btn-novo").slideToggle(4000);          
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
        buttonTabela.classList.add("btn-cadernos-fin");
        tabela.appendChild(buttonTabela);
        tabela = "";
        error.textContent = "";
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



//BTN AGREGAR//
const btnAgregar = document.getElementById("button-agregar")
btnAgregar.addEventListener("click", function (evento){
    let capturandoTitulo = document.getElementById("tituloInput").value;
    // localStorage.setItem("capturandoTitulo", capturandoTitulo)
    
})

//BUTTONSALVAR//

const btnSalvar = document.getElementById("salvar")
btnSalvar.addEventListener("click", function (evento){
    evento.preventDefault();
    
    // capturarTexto()
    // let listaConteudo = []
    let guardandoTexto = document.getElementById("cadernoReprograma").value;
    // listaConteudo.push(guardandoTexto)
    // localStorage.setItem("guardandoTexto", guardandoTexto)
    // localStorage.setItem("guardandoTexto", guardandoTexto)
    // document.getElementById("cadernoReprograma").value=""
    // document.getElementById("tituloInput").value=""
    capturarTituloTexto()
    
})

//CREAR FUNCTION PARA CAPTURAR LOS DATOS DE CAPTURANDOTÍTULO E GUARDANDOTEXTO//
function capturarTituloTexto(){
    let capturandoTitulo = document.getElementById("tituloInput").value;
    let guardandoTexto = document.getElementById("cadernoReprograma").value;
    localStorage.setItem(capturandoTitulo, guardandoTexto)
    
}

//CAPTURAR EL VALOR DEL BUTTON MATERIAS//

const button = document.getElementById("Tabela");
button.addEventListener("click", function(evento){
    evento.preventDefault();
    // console.log("clickou", evento.target.textContent)
    let buttonTituloTexto = localStorage.getItem(evento.target.textContent)
    // buttonTituloTexto = document.getElementById("cadernoReprograma").value;
    console.log(buttonTituloTexto) // valor do localstorage
    const textoArea = document.getElementById("cadernoReprograma")
    console.log(textoArea.value) // valor do textarea
    textoArea.value = buttonTituloTexto;    
})

// EDITOR DE TEXTO API DA SUMMERNOTE //

// $(document).ready(function() {
//         $('#summernote').summernote();
// });





//BUTTONNOVO/

// let btnNovo = document.getElementById("novo")

// btnSalvar.addEventListener("click", function (evento){
//     evento.preventDefault();
// })

// console.log("novo")

