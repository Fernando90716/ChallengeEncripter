const entradaTexto = document.querySelector(".text-input") ;
const textoResultado = document.querySelector(".texto-salida");

function botonEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value);
    entradaTexto.value = "";
    textoResultado.value = textoEncriptado;
}

function botonDesencriptar(){

}

function botonCopiar(){
    copiar()
}

function encriptar(stringEntrada)
    {
        stringEntrada = stringEntrada.toLowerCase();
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        for (let index = 0; index < matrizCodigo.length; index++) 
        {
            if (stringEntrada.includes(matrizCodigo[index][0])) 
            {
                stringEntrada = stringEntrada.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1]);
            }
        return stringEntrada;
    }
}

function desencriptar(stringSalida){

}

function copiar() {
    
}