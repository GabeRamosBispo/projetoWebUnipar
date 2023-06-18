document.getElementById('vendaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var qtdPequenas = parseInt(document.getElementById('qtdPequenas').value);
    var qtdMedias = parseInt(document.getElementById('qtdMedias').value);
    var qtdGrandes = parseInt(document.getElementById('qtdGrandes').value);

    var valorArrecadado = (qtdPequenas * 10) + (qtdMedias * 12) + (qtdGrandes * 15);

    document.getElementById('valorArrecadado').textContent = valorArrecadado.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});