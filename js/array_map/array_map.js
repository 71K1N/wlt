//  -   ARRAY
var array_1 = [1, 2, 3, 4]

console.log("aray_1: " + array_1);

//  -   EXECUCAO DA FUNCAO MULT BY 2
mapped = array_1.map(numero => multBy2(numero))
console.log("RESULTADO DA FUNCAO DE MULTPLICACAO: " + mapped);

console.log("==========================================");

//  -   EXECUCAO DA FUNCAO PARA VERIFICAR SE É PAR
console.log("aray_1: " + array_1)

array_1.map(num => isPair(num))


console.log("==========================================");

//  -   FUNCAO MULTIPLICAR POR 2
function multBy2(num) {
    return num * 2
}

//  -   FUNCAO VERIFICAR SE É PAR OU IMPAR
function isPair(num) {
    if (num % 2 == 1) {
        console.log(`${num} is odd`);
    } else {
        console.log(`${num} is pair`);
    }

}