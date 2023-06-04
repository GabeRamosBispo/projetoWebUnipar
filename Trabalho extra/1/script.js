document.getElementById('cotacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cotacaoAtual = parseFloat(document.getElementById('cotacaoAtual').value);

    var valorSubida1 = cotacaoAtual * 1.01;
    var valorSubida2 = cotacaoAtual * 1.02;
    var valorSubida5 = cotacaoAtual * 1.05;
    var valorSubida10 = cotacaoAtual * 1.10;

    document.getElementById('valorSubida1').textContent = valorSubida1.toFixed(2);
    document.getElementById('valorSubida2').textContent = valorSubida2.toFixed(2);
    document.getElementById('valorSubida5').textContent = valorSubida5.toFixed(2);
    document.getElementById('valorSubida10').textContent = valorSubida10.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});