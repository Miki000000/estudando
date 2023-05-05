// CONVERSÃO DE VÁRIAVEIS:
// existem diferentes formas de converter o tipo de uma váriavel, a mais comum delas sendo:
// primeiro defino a variavel ola para uma string que contém um número
ola = '3.230';
// então, converto a string para um número inteiro utilizando parseInt, que irá me retornar o valor antes da virgula, pois é inteiro.
ola = parseInt(ola);
// console.log(ola);
// utilizando outro comando, o parseFloat, é possível converter para número float, que vai ser o número completo.
ola = parseFloat(ola);
console.log(ola);
// também existe a possibilidade de definir utilizando outra tag, a number. Nesse caso, caso dentro do valor da váriavel tenha qualquer parte com algo que não seja um número
// o valor retornado será sempre NaN.
ola = Number(ola);
console.log(ola);

// outra forma de converter o tipo de uma váriavel, mas dessa vez para string.
// no caso abaixo, o valor de olá será convertido para uma string.
ola = ola + '?';
// porém, existe uma forma mais interessante de converter um valor numérico para string, que seria:
// o resultado seria o mesmo, porém, através disso, você consegue alterar a base númerica, para binários, que no caso seria ao colocar dentro dos parenteses
// o numero 2, como (2), decimal, que é o valor padrão e pode ser difinido ao colocar o número 10 entre parenteses, (10)
// e hexadecimal, que é dado ao colocar entre os parenteses (16)
ola = 12;
ola = ola.toString();
console.log(ola);
ola = ola.toString(2);
console.log(ola);
ola = ola.toString(10);
console.log(ola);
ola = ola.toString(16);
console.log(ola);
