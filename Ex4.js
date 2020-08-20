//Mínimo
//O capítulo anterior introduziu a função Math.min que retorna o seu menor argumento. Nós podemos reproduzir essa funcionalidade agora. Escreva uma função min que recebe dois argumentos e retorna o menor deles.

function Math(a, b) {
    if (a < b) {
        return a
    }
    else {
        return b
    }

}
console.log(Math(6, 9))

