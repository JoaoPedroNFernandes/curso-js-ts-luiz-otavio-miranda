//exercicio

const container = document.querySelector(".container");
const date = new Date();
const diaSemana = date.getDay();
const dia = date.getDate();
const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const diaMes = date.getMonth();
const ano = date.getFullYear()
const hora = date.getHours()
const min = date.getMinutes()
switch (diaSemana) {
  case 0:
    container.innerHTML = `domingo, ${dia} de `;
    break;
  case 1:
    container.innerHTML = `segunda-feira, ${dia} de ${mes[diaMes]} de ${ano} <br> ${hora}:${zero(min)}`;
    break;
  case 2:
    container.innerHTML = `terça-feira, ${dia} de`;
    break;
  case 3:
    container.innerHTML = `quarta-feira, ${dia} de`;
    break;
  case 4:
    container.innerHTML = `quinta-feira, ${dia} de`;
    break;
  case 5:
    container.innerHTML = `sexta-feira, ${dia} de`;
    break;
  case 6:
    container.innerHTML = `sábado, ${dia} de`;
    break;
  default:
    container.innerHTML = "error";
}

function zero(num) {
    return num >= 10? num: `0${num}` 
}
