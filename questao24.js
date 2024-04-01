/*
 Como você pode verificar se um número é múltiplo de 3 ou 5 em 
JavaScript usando operadores lógicos? 
*/
var numero = 15; // número a ser verificado

// Verifica se o número é múltiplo de 3 ou 5 usando operadores lógicos e operadores de módulo
if (numero % 3 === 0 || numero % 5 === 0) {
    console.log("O número é múltiplo de 3 ou 5.");
} else {
    console.log("O número não é múltiplo de 3 nem de 5.");
}
