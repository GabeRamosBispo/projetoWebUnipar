function calcularMeta() {
    var valorVendido = parseFloat(document.getElementById('valorVendido').value);
    var meta = parseFloat(document.getElementById('meta').value);
    var metaMinima = parseFloat(document.getElementById('metaMinima').value);

    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

    var resultado = "";

    if (percentualMeta >= 100) {
        resultado = "Atingiu a meta!";
    } else if (percentualMetaMinima >= 100) {
        resultado = "Atingiu a meta mínima!";
    } else {
        resultado = "Não atingiu a meta nem a meta mínima.";
    }

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('percentualMeta').innerHTML = "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%";
    document.getElementById('percentualMetaMinima').innerHTML = "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";
}