const entradaTexto = document.querySelector(".text-input") ;
const textoResultado = document.querySelector(".texto-salida");

function botonEncriptar()
{   
    document.getElementById("salida").style.background = "white";
    const textoEncriptado = encriptar(entradaTexto.value);
    entradaTexto.value = "";
    textoResultado.value = textoEncriptado;
}

function botonDesencriptar()
{   
    document.getElementById("salida").style.background = "white";
    const textoDesencriptado = desencriptar(entradaTexto.value);
    entradaTexto.value = "";
    textoResultado.value = textoDesencriptado;
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
        }
    return stringEntrada;
}

function desencriptar(stringSalida)
{   
    stringSalida = stringSalida.toLowerCase();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let index = 0; index < matrizCodigo.length; index++) 
    {
        if (stringSalida.includes(matrizCodigo[index][0]))
        {
            stringSalida = stringSalida.replaceAll(matrizCodigo[index][1], matrizCodigo[index][0]);
        }
    }
    return stringSalida;
}

function copiar() 
{
    textoResultado.select();
    navigator.clipboard.writeText(textoResultado.value);
    textoResultado.value = "";
    alert("Texto copiado con exito");
    ponleFocus();
}

function ponleFocus(){
    document.getElementById("input1").focus();
}