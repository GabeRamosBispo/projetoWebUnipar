function calcularDias() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var dias = idade * 365;
    var result = nome + ", voce ja viveu " + dias + " dias.";

    document.getElementById("resultado").textContent = result;
}