// Arrays são como listas, ou seja, um local onde você armazena um número de dados na memória. Consiste em básicamente você alocar um espaço para armazenamento especifico.
const array = new Array();
// Array é considerada um objeto no javascript, pois não existe um tipo array aqui. Mas na prática, não afeta em muita coisa.
console.log(typeof array);
// Também é possível colocar um valor a mais nas arrays, caso você queira adicionar uma informação a ela. Por exemplo:
array[0] = 'Miki';
// Ao fazer isso, defini a primeira casa da array, como Miki.
// Perceba que usei o cochetes. Cochetes são usados para acessar a casa que você quer, eles especificam qual é a posição da informação dentro da array que você quer acessar.
console.log(array[0]);
// As arrays podem ter mais de um valor, mesmo que de tipos diferentes, ao mesmo tempo, por exemplo:
const array2 = new Array(true, 'Nicholas', 20, 30, new Array(2, 4, 5));
// Note que também é possivel inserir outra array dentro dessa mesma array.
// Para chamar uma array é facil, você só precisa chamar o nome da array, seguida do número da "casa" em que você deseja chamar, como:
console.log(array2[0]);
// Lembre-se que o primeiro valor da Array é sempre 0.
// Para chamar a array dentro da array, você pode fazer da seguinte forma:
console.log(array2[4][0]);
// Uma forma mais simples de definir uma array, é usar diretamente o cochetes na hora de sua definição. Por exemplo:
const array3 = [false, 'Bichona', 20, 40, [3, 2, 3]];
// Note que também criei uma array dentro da array dessa forma, o que também é possível, e se você chamar, vai dar certo da mesma forma.
console.log(array3[1]);
// Para saber o tamanho de uma array, você pode utilizar a propriedade length, como:
console.log(array3.length);
// Isso retornará uma contagem de qual o tamanho de sua array. Note que esse valor sempre começa do número 1, enquanto a array tem inicio na casa "0".
// Se quisessemos usar essa propriedade para pegar uma parte da array, por exemplo, o fim, devemos sempre excluir essa casa "extra", pois a array sempre tem um
// Número a menos, por começar da casa 0.
console.log(array3[array3.length - 1]);
// Isso por exemplo, sempre retornará o ultimo elemento da array, caso você tente sem o - 1, o resultado será undefined.
// Caso você queira puxar todos os valores de arrays um atrás do outro, sem ter que ir um por um, você poderá utilizar uma iteração, com uma estrutura de loop.
const exemplo = [0, 1, 2, 3, 4];
for (let i = 0; i < exemplo.length; i++) {
  console.log(`${i} - ${exemplo[i]}`);
}
