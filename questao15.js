/*
Explique como a ordem de avaliação dos operadores lógicos afeta o 
resultado de uma expressão em JavaScript.
R=A precedência dos operadores determina a ordem na qual as operações são executadas. Por exemplo, em uma expressão que combina && (AND), || (OR) e ! (NOT), o ! tem a mais alta precedência, seguido por && e ||.
Isso significa que, por padrão, operadores com maior precedência serão avaliados antes dos operadores com menor precedência.
Avaliação da Expressão:

A ordem de avaliação dos operadores dentro de uma expressão segue as regras de precedência, mas também depende da associação dos operadores.
Por exemplo, na expressão true && false || true, o && tem maior precedência do que ||, então será avaliado primeiro. Isso resulta em false || true, que então é avaliado para true.
Agrupamento de Operadores:

Utilizar parênteses em torno de partes específicas da expressão pode alterar a ordem de avaliação. Expressões dentro de parênteses são avaliadas antes das expressões externas.
Por exemplo, em (true && false) || true, as operações dentro dos parênteses são avaliadas primeiro, resultando em false || true, que é true.
*/