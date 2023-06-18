function calcularArea() {
    var largura = document.getElementById('largura').value;
    var comprimento = document.getElementById('comprimento').value;
  
    var area = largura * comprimento;
  
    document.getElementById('resultado').innerHTML = 'A área do terreno é: ' + area + ' metros quadrados.';
  }