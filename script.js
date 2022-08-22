const d = document;
const texto = d.querySelector("#texto")
const mostrarTexto = d.querySelector("#mostrarTexto")

const btnEncriptar = d.querySelector("#btnEncriptar")
const btnDesencriptar = d.querySelector("#btnDesencriptar")
const btnCopiar = d.querySelector("#btnCopiar")

btnEncriptar.onclick = function () {
    informarUsuario("Encriptado")
    mostrarTexto.value = encriptar(texto.value)
    d.querySelector(".imgMunieco").style.display="none"

}
btnDesencriptar.onclick = function () {
    informarUsuario("Desencriptado")

    mostrarTexto.value = desencriptar(texto.value)
}

btnCopiar.onclick = copiarTexto
const codigos = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "oben"],
    ["u", "ufat"]];

function encriptar(textoAEncriptar) {
    for (let i = 0; i < codigos.length; i++) {
        if (textoAEncriptar.includes(codigos[i][0])) {

            textoAEncriptar = textoAEncriptar.replaceAll(codigos[i][0], codigos[i][1])
        }
    }
    return textoAEncriptar
}

function desencriptar(textoAEncriptar) {
    for (let i = 0; i < codigos.length; i++) {
        if (textoAEncriptar.includes(codigos[i][1])) {

            textoAEncriptar = textoAEncriptar.replaceAll(codigos[i][1], codigos[i][0])
        }
    }
    return textoAEncriptar
}



function copiarTexto() {
    informarUsuario("Copiado")

    var texto = mostrarTexto.value;
 
    navigator.clipboard.writeText(texto)
    .then()
    .catch(err => {
        alert("No se pudo copiar el texto")
    });
}



function informarUsuario(mensaje){
    const main=d.querySelector("main")
    const div=d.createElement("div")
    div.setAttribute("class","mensaje")
    div.innerHTML=mensaje
    main.appendChild(div)
    setTimeout(() => {
        main.removeChild(div)
    }, 1000);
}