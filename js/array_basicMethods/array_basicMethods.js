//  -   ARRAY
var arr = [1, 2, 3, 68, 74, 41];

//  -   TAMANHO DO ARRAY (length)
console.log('--------------------------------------------------');
console.log("TAMANHO DO ARRAY (length)");
console.log(arr.length);

//  -   PERCORRER ARRAY
console.log('--------------------------------------------------');
console.log("PERCORRER ARRAY");

arr.forEach(function (item, index, array) {
    console.log(item, index);
});

//  -   ADICIONAR ELEMENTO NO FIM DO ARRAY
console.log('--------------------------------------------------');
console.log("ADICIONAR ELEMENTO NO FIM DO ARRAY");

arr.push(10);
console.log(arr);

//  -   EXCLUIR ELEMENTO DO FIM DO ARRAY
console.log('--------------------------------------------------');
console.log("EXCLUIR ELEMENTO DO FIM DO ARRAY");
arr.pop()

console.log(arr);

//  -   REMOVER ELEMENTO DO INICIO DO ARRAY
console.log('--------------------------------------------------');
console.log("REMOVER ELEMENTO DO INICIO DO ARRAY");

arr.shift()
console.log(arr);

//  -   ADICIONAR ELEMENTO NO INICIO DO ARRAY
console.log('--------------------------------------------------');
console.log("ADICIONAR ELEMENTO NO INICIO DO ARRAY");

arr.unshift(35);
console.log(arr);

//  -   OBTER INDICE DE UM ELEMENTO
console.log('--------------------------------------------------');
console.log("OBTER INDICE DE UM ELEMENTO (68 = 3)");

indice = arr.indexOf(68);
console.log(indice);

//  -   REMOVER UM ELENTO PELO INDICE
console.log('--------------------------------------------------');
console.log("REMOVER UM ELEMENTO PELO INDICE INDICE= 4 (74)");
arr.splice(4, 1)
console.log(arr);