function calcularDistancia() {
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);
    
    var distanciaX = x2 - x1;
    var distanciaY = y2 - y1;
    var distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    
    document.getElementById('resultado').innerHTML = "A distância entre os dois pontos é: " + distancia;
}
