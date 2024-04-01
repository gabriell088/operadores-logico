/*
Como você pode verificar se um número é ímpar ou menor que 50 em 
JavaScript usando operadores lógicos?
*/
var numero = 37; // número a ser verificado

// Verifica se o número é ímpar ou menor que 50 usando operadores lógicos
if (numero % 2 !== 0 || numero < 50) {
    console.log("O número é ímpar ou menor que 50.");
} else {
    console.log("O número é par e maior ou igual a 50.");
}