// Repetições, ou loops, são quando você quer que seu código possa se repetir mais de uma vez o mesmo, sem ter que repetir-se milhares de vezes.
// Por exemplo:
// primeiro criaremos uma variavel com prompt, que é para que o usuario possa digitar no navegador.
let numero = prompt('digite um número para ter a tabuada');
// então, definiremos um indice que vai ser utilizado no loop.
let i = 1;
// E então, criamos um loop que rodará enquanto a condição no argumento for cumprida, que nesse caso é, o indice deve ser menor ou igual a dez. Esse é um loop em que você não saberia quantas vezes
// Seria necessário ser utilizado. Por exemplo, no exemplo abaixo, caso retirassemos o operador de incremento "i++", o loop não acabaria pois a variavel i nunca seria maior que 10.
while (i <= 10) {
  document.write(`${numero} x ${i} = ${i * numero} <br>`);
  i++;
}
// Outro exemplo para melhor entendimento é o seguinte. Imagine que você possui a necessidade do usuario inserir um numero, mas apenas um numero especifico. Você faria:
while (i === 10) {
  i = prompt('Digite o número 10:');
}
// Dessa forma, o loop será executado até que o número posto pelo usuario seja 10.
// Também existe o loop for, que é utilizado quando você já tem um número de vezes que o quer que seja executado, e isso é definido como um argumento diretamente. Por exemplo:
for (let l = 0; l <= 10; l++) {
  document.write(`${numero} x ${l} = ${l * numero}<br>`);
}
// Perceba que nesse caso, o fim do loop já foi decidido no começo, e não no valor do mesmo. Ele torna esse tipo de código mais eficiente.

// Existe outra estrutura de loop, o do while, que executará o comando antes de verificar se ainda deve continuar no loop.
do {
  document.write(`${numero} x ${i} = ${i * numero}<br>`);
  i++;
} while (i <= 10);
// Isso fará com que ele retorne um a mais que 10, que é quando ele para1-19[
