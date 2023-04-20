// CONCATENAR VÁRIAVEIS OU OUTPUTS
// também é possível fazer concatenação, ou seja, unir duas váriaveis diferentes em uma única resposta, de duas formas possíveis. Primeiro, criamos duas váriaveis, de tipos diferentes.
let teste1 = 'sou massa.';
let teste2 = 2;
// a primeira forma é utilizando-se da função +.
// cada váriavel que eu adiciono, devo complementar com o simbolo para realizar a concatenação. Isso também vale para valores soltos ou strings normais.
let teste3 = teste1 + 'de verdade' + 2 + 'morram' + teste2;
console.log(teste3);
// a outra forma é utilizando-se da função ${}, porém, só é funcional quando utilizada dentro de uma string que também é dentro de ``.
console.log(`mano, eu só sei que ${teste1} e também ${2} e mais ${teste2}`);
