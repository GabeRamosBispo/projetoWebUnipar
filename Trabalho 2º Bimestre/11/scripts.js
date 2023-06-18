function calcularSalario() {
    var salarioInicial = parseFloat(document.getElementById("salario").value);
    var aumento = salarioInicial * 0.15;
    var salarioComAumento = salarioInicial + aumento;
    var impostos = salarioComAumento * 0.08;
    var salarioFinal = salarioComAumento - impostos;
    
    document.getElementById("salarioInicial").textContent = salarioInicial.toFixed(2);
    document.getElementById("salarioComAumento").textContent = salarioComAumento.toFixed(2);
    document.getElementById("salarioFinal").textContent = salarioFinal.toFixed(2);
  }