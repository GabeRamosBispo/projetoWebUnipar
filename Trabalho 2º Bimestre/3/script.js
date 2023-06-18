function calcular() {
  // Obter a quantidade de pães e broas vendidos
  var paes = parseInt(document.getElementById('paes').value);
  var broas = parseInt(document.getElementById('broas').value);

  // Calcular o total vendido
  var totalVendido = paes * 0.12 + broas * 1.50;

  // Calcular 10% do total para guardar separadamente
  var guardarSeparadamente = totalVendido * 0.1;

  // Exibir os resultados
  document.getElementById('total').innerHTML = 'Total vendido: R$ ' + totalVendido.toFixed(2);
  document.getElementById('guardar').innerHTML = 'Valor a guardar: R$ ' + guardarSeparadamente.toFixed(2);
}

