document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);

    var diasPassados = (mes - 1) * 30 + dia;

    document.getElementById('diasPassados').textContent = diasPassados;
    document.getElementById('resultado').style.display = 'block';
});