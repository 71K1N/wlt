//  -   ARRAY
const numbers = [1, 2, 4, 5, 3, 7, 60];

/**
 * Executa a funcao  isPair como filtro e retorna os numero em que a funcao retorna true
 */
const pairNumbers = numbers.filter(isPair);

/**
 * Executa a funcao  isOdd como filtro e retorna os numero em que a funcao retorna true
 */
const oddNumbers = numbers.filter(isOdd);

console.log("Par: " + pairNumbers);
console.log("Impar: " + oddNumbers);

//  -   verifica se é par
function isPair(el) {
    return el % 2 == 0
}

//  -   verifica se é impar
function isOdd(el) {
    return el % 2 == 1
}