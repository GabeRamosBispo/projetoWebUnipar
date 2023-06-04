function verificarMaisVelha() {
    var pessoas = [];


    for (var i = 1; i <= 3; i++) {
        var nome = document.getElementById('nome' + i).value;
        var anoNascimento = parseInt(document.getElementById('anoNascimento' + i).value);
        var pessoa = {
            nome: nome,
            anoNascimento: anoNascimento
        };
        pessoas.push(pessoa);
    }

    pessoas.sort(function(a, b) {
        return b.anoNascimento - a.anoNascimento;
    });

    var mensagem = "";
    for (var i = 0; i < pessoas.length; i++) {
        var idade = new Date().getFullYear() - pessoas[i].anoNascimento;
        mensagem += "Pessoa " + (i + 1) + ": " + pessoas[i].nome + " - " + idade + " anos<br>";
    }

    document.getElementById('resultado').innerHTML = mensagem;
    
}


