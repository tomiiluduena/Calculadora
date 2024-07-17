// Agerga a la pnatalla el valor del boton accionado
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// Esta accion vacia la pantalla
function borrar(valor){
    document.getElementById('pantalla').value = " "
}

// Esta accion toma el valor de la pnatalla y lo ejecuta
function calcular(valor){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}