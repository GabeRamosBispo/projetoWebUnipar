function verificarSituacao() {
    var nota = parseFloat(document.getElementById('nota').value);

    if (nota > 6) {
        document.getElementById('resultado').innerHTML = "Aprovado";
    } else if (nota >= 4 && nota <= 6) {
        document.getElementById('resultado').innerHTML = "Precisa fazer prova substitutiva";
    } else {
        document.getElementById('resultado').innerHTML = "Reprovado";
    }
}