document.getElementById('pratoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var pesoPrato = parseFloat(document.getElementById('pesoPrato').value);
    var valorPagar = 12.00 * pesoPrato;

    document.getElementById('valorPagar').textContent = valorPagar.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});