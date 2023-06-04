function calcularTotal() {
    var sabores = [];
    for (var i = 1; i <= 1; i++) {
        var sabor = document.getElementById('sabor' + i).value;
        sabores.push(sabor);
    }

    var refrigerantes = parseInt(document.getElementById('refrigerantes').value);

    var valorPizza = 57.00;
    var valorRefrigerante = 7.00;
    var totalPizza = valorPizza * sabores.length;
    var totalRefrigerante = valorRefrigerante * refrigerantes;
    var total = totalPizza + totalRefrigerante;

    
    var saborList = sabores.join(", ");

    document.getElementById('sabores').innerHTML = 'Sabores escolhidos: ' + saborList;
    document.getElementById('totalPizza').innerHTML = 'Valor total da Pizza: R$ ' + totalPizza.toFixed(2);
    document.getElementById('totalRefrigerante').innerHTML = 'Valor total do Refrigerante: R$ ' + totalRefrigerante.toFixed(2);
    document.getElementById('total').innerHTML = 'Valor total a pagar: R$ ' + total.toFixed(2);
}