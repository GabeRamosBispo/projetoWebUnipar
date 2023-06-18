function calcularFerraduras() {
    var Cavalos = document.getElementById('Cavalos').value;
    
  
    var Cavalos  = Cavalos * 4;
    document.getElementById('resultado').innerHTML = `Quantidade de Ferraduras: ${Cavalos}`;
  }