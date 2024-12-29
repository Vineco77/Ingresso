function comprar() {
  let tipoDeIngresso = document.getElementById("tipo-ingresso").value;
  let quantidade = document.getElementById("qtd").value;

  if (tipoDeIngresso == "pista") {
    comprarPista(quantidade);
  } else if (tipoDeIngresso == "superior") {
    comprarSuperior(quantidade);
  } else {
    comprarInferior(quantidade);
  }
}

function comprarPista(quantidade) {
  let pista = parseInt(document.getElementById("qtd-pista").textContent);

  if (quantidade > pista) {
    alert("Quantidade indisponivel, em breve teremos mais 😁");
  } else {
    pista = pista - quantidade;
    document.getElementById("qtd-pista").textContent = pista;
    alert("Compra realizada com sucesso 😊");
  }
}

function comprarSuperior(quantidade) {
  let superior = parseInt(document.getElementById("qtd-superior").textContent);

  if (quantidade > superior) {
    alert("Quantidade indisponivel, em breve teremos mais 😁");
  } else {
    superior = superior - quantidade;
    document.getElementById("qtd-superior").textContent = superior;
    alert("Compra realizada com sucesso 😊");
  }
}

function comprarInferior(quantidade) {
  let inferior = parseInt(document.getElementById("qtd-inferior").textContent);

  if (quantidade > inferior) {
    alert("Quantidade indisponivel, em breve teremos mais 😁");
  } else {
    inferior = inferior - quantidade;
    document.getElementById("qtd-inferior").textContent = inferior;
    alert("Compra realizada com sucesso 😊");
  }
}
