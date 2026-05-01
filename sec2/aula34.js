function meuEscopo() {
  const fomr = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = fomr.querySelector(".nome");
    const sobrenome = fomr.querySelector(".sobrenome");
    const peso = fomr.querySelector(".peso");
    const altura = fomr.querySelector(".altura");
    let objeto = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };
    
    pessoas.push(objeto);
    console.log(pessoas);
    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
  }

  fomr.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
