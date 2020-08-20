//Recursão
//Nós vimos que o % (operador resto) pode ser usado para testar se um número é par ou ímpar, usando % 2 para verificar se ele é divisível por dois. Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:
//Zero é par.
//Um é ímpar.
//Para todo outro número N, sua paridade é a mesma de N - 2.
//Defina uma função recursiva isEven que satisfaça as condições descritas acima. A função deve aceitar um número como parâmetro e retornar um valor Booleano.
//teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. Por quê? Você consegue pensar em uma maneira de arrumar isso?

function isEven(x){
    if(x % 2 == 0)
        return true
        else if ( x == 1)
        return false   
        else if ( x < 0)
        return isEven(-x)
        else return (isEven (x - 2))
}
    console.log(isEven(50))