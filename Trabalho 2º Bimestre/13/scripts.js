function calcularArea() {
    var raio = document.getElementById('raio').value;
    var area = 3.14 * raio * raio;

    var areaOutput = document.getElementById('area');
    areaOutput.textContent = 'Área da Pizza: ' + area.toFixed(2);
}