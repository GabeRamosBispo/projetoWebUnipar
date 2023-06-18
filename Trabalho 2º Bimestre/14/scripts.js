function calcularDivisao() {
    var valorTotal = parseFloat(document.getElementById('valor-total').value);
    var valorCarlos = Math.floor(valorTotal / 3);
    var valorAndre = Math.floor(valorTotal / 3);
    var valorFelipe = valorTotal - (valorCarlos + valorAndre);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Carlos: R$' + valorCarlos.toFixed(2) + '<br>';
    resultado.innerHTML += 'André: R$' + valorAndre.toFixed(2) + '<br>';
    resultado.innerHTML += 'Felipe: R$' + valorFelipe.toFixed(2);
}