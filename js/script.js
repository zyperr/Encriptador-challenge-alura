const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0;i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){ 
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);//remplaza las palabras colocadas en el punto 0 de la array(matrizCodigo) por las del punto 1 de la array[matrizCodigo] y las cambia.
        }//verifica si en matrizCodigo en el punto 0 de cada array coincice con la palabra colocada stringEncriptado
    }
    return  stringEncriptado;
}
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    document.getElementById("ningunTexto").style.display ="none";
    document.getElementById("mensajeIngresarTexto").style.display="none";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0;i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){ 
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);//remplaza las palabras colocadas en el punto 0 de la array(matrizCodigo) por las del punto 1 de la array[matrizCodigo] y las cambia.
        }//verifica si en matrizCodigo en el punto 0 de cada array coincice con la palabra colocada stringEncriptado
    }
    return  stringDesencriptado;
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
    document.getElementById("ningunTexto").style.display ="none";
    document.getElementById("mensajeIngresarTexto").style.display="none";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(../svg/Muñeco.svg)";
    document.getElementById("ningunTexto").style.display = document.querySelector(".ningunTexto");
    document.getElementById("mensajeIngresarTexto").style.display= document.querySelector(".mensajeIngresarTexto");
}
