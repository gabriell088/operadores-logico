/*
O que significa a expressão true && !(false || true)?
*/
(false || true): Aqui, false || true verifica se pelo menos um dos operandos é verdadeiro. Como true é verdadeiro, o resultado desta parte da expressão é verdadeiro.

!(false || true): O operador ! (NOT) inverte o resultado da expressão false || true, tornando-a falsa.

true && !(false || true): Agora, aplicamos o operador && (AND) entre true e o resultado de !(false || true). Como um dos operandos é falso, o resultado desta parte da expressão é falso.