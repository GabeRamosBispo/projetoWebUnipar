function calcularTurmas() {
    var totalAlunos = parseInt(document.getElementById('totalAlunos').value);
    var totalTurmas = parseInt(document.getElementById('totalTurmas').value);

    var pessoasPorTurma = Math.floor(totalAlunos / totalTurmas);
    var pessoasSemTurma = totalAlunos % totalTurmas;

    document.getElementById('pessoasPorTurma').innerHTML = "Pessoas por Turma: " + pessoasPorTurma;
    document.getElementById('pessoasSemTurma').innerHTML = "Pessoas sem Turma: " + pessoasSemTurma;
}