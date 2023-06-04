document.getElementById('operacoesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);

    var resultadoSoma = n1 + n2;
    var resultadoSubtracao = n1 - n2;
    var resultadoMultiplicacao = n1 * n2;
    var resultadoDivisao = n1 / n2;

    document.getElementById('resultadoSoma').textContent = resultadoSoma;
    document.getElementById('resultadoSubtracao').textContent = resultadoSubtracao;
    document.getElementById('resultadoMultiplicacao').textContent = resultadoMultiplicacao;
    document.getElementById('resultadoDivisao').textContent = resultadoDivisao.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});