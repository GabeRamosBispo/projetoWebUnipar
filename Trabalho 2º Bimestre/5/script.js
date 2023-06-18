document.getElementById('abastecimento').addEventListener('submit', function(event) {
    event.preventDefault();

    var precoLitro = parseFloat(document.getElementById('precoLitro').value);
    var valorPagamento = parseFloat(document.getElementById('valorPagamento').value);

    var litrosAbastecidos = valorPagamento / precoLitro;
    litrosAbastecidos = litrosAbastecidos.toFixed(2);

    document.getElementById('litrosAbastecidos').textContent = litrosAbastecidos;
    document.getElementById('resultado').style.display = 'block';
});