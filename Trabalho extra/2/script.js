document.getElementById('omeleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var qtdPessoas = parseInt(document.getElementById('qtdPessoas').value);

    var qtdOvos = qtdPessoas * 2;
    var qtdQueijo = qtdPessoas * 50;

    document.getElementById('qtdOvos').textContent = qtdOvos;
    document.getElementById('qtdQueijo').textContent = qtdQueijo;
    document.getElementById('resultado').style.display = 'block';
});