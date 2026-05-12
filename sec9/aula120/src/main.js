import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
})()

//o fluxo é o seguinte:
/**
 * 1- passa pelo main.js e pega todos os imports que possue, carregando todos;
 * 2- depois é alterado o bundle.js.
 * 3-o codigo que vai aparecer para o usuário vai ser o bundle.js que vai ser rodado em todos os 
 * navegadores.
 */