LISTA = [];
function AdicionarNaLista() {
  let numeroparadd = document.getElementById("escolha").value;
  if (numeroparadd != "") {
    LISTA.push(numeroparadd);
    document.getElementById("escolha").value = "";
  } else {
    alert("Digite um numero!");
  }
  document.getElementById("itensnalista").innerHTML = LISTA;
  document.getElementById("escolha").value = "";
}

function Jogar() {
  let aleatorio = Math.floor(Math.random() * LISTA.length);
  document.getElementById("numeroaleatorio").innerHTML = LISTA[aleatorio];
}
