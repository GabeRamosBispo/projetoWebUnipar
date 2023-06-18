function imprimirSaida() {
    var numero = document.getElementById('numero').value;
    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;

    var saida = document.getElementById('saida');
    saida.textContent = 'CENTENA = ' + centena + ' DEZENA = ' + dezena + ' UNIDADE = ' + unidade;
}