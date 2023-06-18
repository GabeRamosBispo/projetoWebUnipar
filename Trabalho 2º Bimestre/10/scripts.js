function converterTempo() {
    var tempoDias = parseInt(document.getElementById("tempo").value);
    
    var anos = Math.floor(tempoDias / 365);
    var meses = Math.floor((tempoDias % 365) / 30);
    var dias = (tempoDias % 365) % 30;
    
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
  }