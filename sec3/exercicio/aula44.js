//exercicio
function calcular() {
  const form = document.querySelector("form");
  let inputPeso = document.querySelector(".peso");
  let inputAltura = document.querySelector(".altura");
  const texto = document.querySelector(".texto");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso || peso < 2.13 || peso > 635) {
      texto.innerHTML = "";
      texto.innerHTML += `Peso inválido `;
      texto.style.background = "rgb(214, 40, 40)";
    } else if (!altura || altura < 0.546 || altura > 2.72) {
      texto.innerHTML = "";
      texto.innerHTML += `Altura inválida `;
      texto.style.background = "rgb(214, 40, 40)";
    } else {
      let imc = peso / altura ** 2;
      imc = Math.round(imc * 100) / 100;
      imc = imc.toFixed(2);
      texto.innerHTML = "";
      switch (true) {
        case imc < 18.5:
          texto.innerHTML += `Seu IMC é ${imc} (abaixo do peso)`;
          texto.style.background = "rgb(39, 182, 39)";
          break;
        case imc >= 18.5 && imc <= 24.9:
          texto.innerHTML = `Seu IMC é ${imc} (peso normal)`;
          texto.style.background = "rgb(39, 182, 39)";
          break;
        case imc >= 25 && imc <= 29.9:
          texto.innerHTML = `Seu IMC é ${imc} (sobrepeso)`;
          texto.style.background = "rgb(39, 182, 39)";
          break;
        case imc >= 30 && imc <= 34.9:
          texto.innerHTML = `Seu IMC é ${imc} (obesidade grau 1)`;
          texto.style.background = "rgb(39, 182, 39)";
          break;
        case imc >= 35 && imc <= 39.9:
          texto.innerHTML = `Seu IMC é ${imc} (obesidade grau 2)`;
          texto.style.background = "rgb(39, 182, 39)";
          break;
        default:
          texto.innerHTML = `Seu IMC é ${imc} (obesidade grau 3)`;
          texto.style.background = "rgb(39, 182, 39)";
      }
    }
  }

  form.addEventListener("submit", recebeEventoForm);
}

calcular();
