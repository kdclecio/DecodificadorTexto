function encriptar() {
    const texto = document.getElementById("inputTexto").value.toLowerCase();

    const substituicoes = {
        e: "enter",
        o: "ober",
        u: "ufat",
        a: "ai",
        i: "imes"
    };

    let txtCifrado = texto;
    for (const letra in substituicoes) {
        txtCifrado = txtCifrado.replace(new RegExp(letra, "igm"), substituicoes[letra]);
    }

    const imgDer = document.getElementById("imgDer");
    const textoElement = document.getElementById("texto");
    const texto2Element = document.getElementById("texto2");
    const copiarElement = document.getElementById("copiar");

    imgDer.style.display = "none";
    textoElement.style.display = "none";
    texto2Element.innerHTML = txtCifrado;
    copiarElement.style.display = "inherit";
}

function desencriptar() {
    const texto = document.getElementById("inputTexto").value.toLowerCase();

    const substituicoes = {
        "enter": "e",
        "ober": "o",
        "imes": "i",
        "ai": "a",
        "ufat": "u"
    };

    let txtDecifrado = texto;
    for (const chave in substituicoes) {
        txtDecifrado = txtDecifrado.replace(new RegExp(chave, "igm"), substituicoes[chave]);
    }

    const imgDer = document.getElementById("imgDer");
    const textoElement = document.getElementById("texto");
    const texto2Element = document.getElementById("texto2");
    const copiarElement = document.getElementById("copiar");

    imgDer.style.display = "none";
    textoElement.style.display = "none";
    texto2Element.innerHTML = txtDecifrado;
    copiarElement.style.display = "inherit";
}

function copiar() {
    var conteudo = document.getElementById("texto2").textContent;
    navigator.clipboard.writeText(conteudo).then(() => {
        alert("Copiado!");
    });
}