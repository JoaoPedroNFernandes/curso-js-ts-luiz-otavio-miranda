// IIFE -> Immediately Invoked Function express
// basicamente é uma função que apos criada já é executada. Ela não tem acesso ao 
// escopo global de forma alguma.

(function(idade, peso) {
    function falaIdadeEPeso(i, p) {
        console.log(i, p);
    }
    falaIdadeEPeso(idade, peso)
}) (18, 85);
// esse parenteses no final "(18, 85)", os parenteses "chamam" a função e os parametros passam os parametros