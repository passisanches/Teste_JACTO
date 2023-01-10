
function salvar() {
  var nome = document.getElementById("marca");
  var sobrenome = document.getElementById("modelo");
  var email = document.getElementById("ano");
  var matricula = document.getElementById("combustivel");


  var erro = 0;

  if (marca.value == "") {
    marca.classList.add("erro");
    erro = 1;
  } else {
    marca.classList.remove("erro");
    erro = 0;
  }
  if (modelo.value == "") {
    modelo.classList.add("erro");
    erro = 1;
  } else {
    modelo.classList.remove("erro");
    erro = 0;
  }
  if (ano.value == "") {
    ano.classList.add("erro");
    erro = 1;
  } else {
    ano.classList.remove("erro");
    erro = 0;
  }
  if (combustivel.value == "") {
    combustivel.classList.add("erro");
    erro = 1;
  } else {
    combustivel.classList.remove("erro");
    erro = 0;
  }

  if (erro == 0) {
    
    alert("Cadastrado com sucesso!");
  }
  
}  
