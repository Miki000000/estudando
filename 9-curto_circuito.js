// Curtos-circuitos são como ifs Inline. Um uso de operadores lógicos para substituir o uso de ifs desnecessários.
// Começando com o operador lógico OU(||). Ele pode ser usado como uma forma de substituir o 'If' e o 'Else' ao mesmo tempo.
// Vamos ao exemplo de código começando com if e else.
let numero1 = 0;
if (numero1) {
  console.log('É válido');
} else {
  console.log('É inválido');
}
// Nesse caso, o if verificará se a variavel é true, pois não coloque nenhuma outra condição. Como 0 é considerado falso, não retornará o valor dentro de if, mas o de else.
// Temos uma forma de incurtar isso, utilizando-se da mesma variavel, mas com operadores lógicos.
numero1 = 0;
numero1 || console.log('É inválido');
// Nesse caso, o operador OR só retornará caso o valor for falso. Portanto, ele age como um ELSE, porém, caso o valor for verdadeiro, não retornará nada.
// Agora vamos para o if que verifica se o primeiro valor é verdadeiro.
numero1 = 1;
numero1 && console.log('É válido');
// Nesse caso, ele disparará o console.log pois o numero usado no exemplo é considerado true, e portanto, essa estrutura se assemelha ao IF.
// Se a condição for verdadeira, será executado o outro comando.
// Agora, vamos recriar a estrutura de if e else somente com operadores lógicos.
numero1 = 1;
(numero1 && console.log('É valido')) || (!numero1 && console.log('É inválido'));
// Nesse caso, o operador lógico verifica primeiro o que está entre parenteses, e caso for validado, ele disparará o primeiro comando, se não for válido, disparará o segundo.

// Vamos fazer algo um pouco mais avançado.
let idade = 18;
let passaporte = false;
const viajar = (idade >= 18 && passaporte) || (!passaporte && 'sem passaporte') || `Você tem apenas ${idade} Anos, te falta ${18 - idade} anos`;
console.log(`Pode viajar: ${viajar}`);
// Usando a lógica que eu utilizei nos anteriores, você consegue descrever o que está acontecendo?
