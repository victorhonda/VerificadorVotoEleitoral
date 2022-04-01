function verificar() {
  let nome = document.getElementById("name");
  let idade = document.getElementById("age").value;
  let containerRes = (document.getElementById("containerRes").hidden = false);

  if (idade >= 16 && (idade <= 17) | (idade >= 71)) {
    document.getElementById(
      "paragrafoRes"
    ).innerHTML = `Você pode votar, mas não é obrigatório. 👏`;
  } else if (idade >= 18 && idade <= 70) {
    document.getElementById(
      "paragrafoRes"
    ).innerHTML = `Você é obrigado a votar. 🎉`;
  } else {
    document.getElementById(
      "paragrafoRes"
    ).innerHTML = `Você não é obrigado a votar. 🤙`;
  }
}
