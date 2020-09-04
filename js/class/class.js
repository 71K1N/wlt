//  -   USO DE CLASSES

/**
 * Classe 1
 * 
 * Classe com alguns methodos de exemplo
 * @param nome
 * @param idade
 */
class Pessoa {
    //  -   CONSTRUTOR
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    //  -   ATRIBUTOS
    nome;
    idade;

    //  -   METODOS
    andar = () => {
        console.log(`${this.nome} está andando ...`);
    }

    sentar() {
        console.log(`${this.nome} está sentado ...`);
    }
}



/**
 * nao ha hoisting para classe, logo as classes
 * devem ser declaradas antes de sua utilizacao
 */