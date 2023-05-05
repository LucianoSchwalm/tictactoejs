let jogadas = 0;

const h3 = document.getElementById("mostraJogador");
const item = document.getElementsByName("item");

function trocaNome() {
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  if (jogadas == 0) {
    h3.innerText = `Turno do ${player1}`;
    h3.className = player1;
    const button = document.getElementById("jogar");
    button.disabled = true;
    return;
  }

  if (h3.className == player2) {
    h3.innerText = `Turno do ${player1}`;
    h3.className = player1;
  } else {
    h3.innerText = `Turno do ${player2}`;
    h3.className = player2;
  }
}

function marcaElemento(bloco) {
  const p = bloco.childNodes[1];

  if (jogadas % 2 == 0) {
    p.innerText = "X";
  } else {
    p.innerText = "O";
  }
  jogadas++;
  trocaNome();
  bloco.disabled = true;
  p.style.color = "black";
  verificaReinicio(vencedor());
}

function vencedor() {
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  for (let i = 0; i < item.length; i++) {
    if (
      jogadas > 3 &&
      item[i]?.innerText != "" &&
      item[i]?.innerText == item[i + 1]?.innerText &&
      item[i + 1]?.innerText == item[i + 2]?.innerText &&
      (i + 3) % 3 == 0
    ) {
      item[i].style.backgroundColor = "#7CFC00";
      item[i + 1].style.backgroundColor = "#7CFC00";
      item[i + 2].style.backgroundColor = "#7CFC00";
      if (h3.className == player1)
        h3.innerText = `Parabéns ${player2}! Você ganhou!`;
      if (h3.className == player2)
        h3.innerText = `Parabéns ${player1}! Você ganhou!`;
      item.forEach((item) => (item.disabled = true));
      return true;
    }
    if (
      jogadas > 3 &&
      item[i]?.innerText != "" &&
      item[i]?.innerText == item[i + 3]?.innerText &&
      item[i + 3]?.innerText == item[i + 6]?.innerText &&
      i + 6 > 5
    ) {
      item[i].style.backgroundColor = "#7CFC00";
      item[i + 3].style.backgroundColor = "#7CFC00";
      item[i + 6].style.backgroundColor = "#7CFC00";
      if (h3.className == player1)
        h3.innerText = `Parabéns ${player2}! Você ganhou!`;
      if (h3.className == player2)
        h3.innerText = `Parabéns ${player1}! Você ganhou!`;
      item.forEach((item) => (item.disabled = true));
      return true;
    }
    if (
      jogadas > 3 &&
      item[0]?.innerText != "" &&
      item[0]?.innerText == item[4]?.innerText &&
      item[4]?.innerText == item[8]?.innerText
    ) {
      item[0].style.backgroundColor = "#7CFC00";
      item[4].style.backgroundColor = "#7CFC00";
      item[8].style.backgroundColor = "#7CFC00";
      if (h3.className == player1)
        h3.innerText = `Parabéns ${player2}! Você ganhou!`;
      if (h3.className == player2)
        h3.innerText = `Parabéns ${player1}! Você ganhou!`;
      item.forEach((item) => (item.disabled = true));
      return true;
    }
    if (
      jogadas > 3 &&
      item[2]?.innerText != "" &&
      item[2]?.innerText == item[4]?.innerText &&
      item[4]?.innerText == item[6]?.innerText
    ) {
      item[2].style.backgroundColor = "#7CFC00";
      item[4].style.backgroundColor = "#7CFC00";
      item[6].style.backgroundColor = "#7CFC00";
      if (h3.className == player1)
        h3.innerText = `Parabéns ${player2}! Você ganhou!`;
      if (h3.className == player2)
        h3.innerText = `Parabéns ${player1}! Você ganhou!`;
      item.forEach((item) => (item.disabled = true));
      return true;
    }
    if (jogadas == item.length) {
      h3.innerText = "Empate Técnico";
      return true;
    }
  }
}

function verificaReinicio(bool) {
  const div = document.getElementById("divMostra");
  if (bool == true) {
    const button = document.createElement("button");
    button.innerText = "Reiniciar";
    button.addEventListener("click", () => {
      item.forEach((item) => {
        item.childNodes[1].innerText = "";
        item.style.backgroundColor = "#fff";
        item.disabled = false;
        jogadas = 0;
      });
      div.removeChild(button);
      trocaNome();
    });
    div.append(button);
  }
}
