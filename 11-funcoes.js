// Uma função nada mais é do que você criar um tipo de "variavel", cujo objetivo é executar uma cadeia de comandos pré-definidos ao ser chamada posteriormente.
// Existem formas diferentes de serem feitas funções, e a primeira, é criála diretamente:
function ola() {
  console.log(`ola mundo`);
}
ola();
// Ao chamar essa função, que é o que fazemos na linha 6, ela retorna a mensagem ola mundo. Também é possível atribuir valores aos argumentos, que funcionam como váriaveis.
// Por exemplo, podemos fazer:
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
// Definindo o argumento a+b, eu posso agora, ao chamar a função, realizar a soma diretamente nela sem precisar somar.
// Dessa forma, eu alterei os valores do argumento a, e do argumento b, realizando a soma.
console.log(soma(1, 2));
// Outra forma mais facil de conseguir o mesmo resultado seria incluindo a função de printar já dentro da própria função da soma. Como:
function soma2(a, b) {
  let resultado = a + b;
  console.log(resultado);
}
soma2(1, 2);
// Dessa forma, eu só chamei a função uma única vez.

// Outra forma, ainda mais facil de fazer uma função e a definir, é dentro de uma variavel. Por exemplo:
const soma3 = (a, b) => {
  let resultado = a + b;
  return resultado;
};

console.log(soma3(1, 2));
// Essa formula é mais útil pois permite você alterar mais facilmente sua função
