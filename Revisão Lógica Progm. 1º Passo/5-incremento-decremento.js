// INCREMENTO E DECREMENTO
// Incremento é para aumentar de um em um uma váriavel, existem três formas:
// Existem três formas de fazer isso, sendo elas:
let i = 0;
i = i + 1; // <- Primeira forma
i += 1; // <- Segunda forma
i++; // <- Terceira forma
// Para decremento, apenas substituir de soma para subtração.
// Existe também, para a terceira forma, o pré incremento. No primeiro caso, o pós incremento, o número só será adicionado após o algoritmo ser executado.
// Com o pré incremento, ele soma primeiro e atribuir na mesma hora.
console.log(++i);
console.log(i); // <- Pré incremento. Na primeira log, ele já está somando de ínicio, portanto, o resultado será um para os dois.

i = 0; // <-Reset na variavel

console.log(i++);
console.log(i); // <- Pós incremento. Na primeira log, ele não está somando, mas ao terminar o primeiro console, o valor será incrementado após sua execução. O resultado só será um para o ultimo.
