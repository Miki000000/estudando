// Os try/catchs servem unica e exclusivamente para enviar uma mensagem de erro especifica, criada por você, para caso o usuario execute uma operação que resultaria em uma falha.
// Um exemplo:

function mult(n1, n2) {
  return n1 * n2;
}

// alert(mult(3, 'a'));

// Fazendo uma função que retorne a multipliação de dois números, ao utilizar do alert dessa forma, com uma string no local, retornará um NaN. Ou seja, daria um erro.
// E para evitar que o usuário veja tal erro e não entenda, você faria um try/catch.
// Vamos fazer de outra forma.

function mult2(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return alert('Apenas números.');
  }
  return n1 * n2;
}
// Essa é uma forma de fazer, ao fazer uma condicional if para verificar se o que o suario colocou é um numero.
// E caso não seja, retornar um erro utilizando um alert.
// Porém, esse tipo de código só funcionaria em lugares onde o alert é definido, como em rowsers.
// Uma forma melhor de fazer a mesma coisa é utilizando o throw.

function mult2(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw Error(`multiplicação apenas aceita números.`);
  }
  return n1 * n2;
}
// Utilizando-se do throw com o objeto Error, funcionará em qualquer local.
// Mas existe uma forma ainda mais fácil de fazer tal coisa. Digamos que você precise de valores dinamicos. Você poderia fazer uma estrutura try/catch propriamente dita.
// Por exemplo:
let multiplicacao = '';
try {
  // O try serve para você dizer para o computador tentar algo, exatamente como o nome indica.
  multiplicacao = mult2(3, 'a');
} catch (e) {
  // O catch é para quando esse algo não funciona, e portanto, retorna um erro, que dentro do catch, você pode tratar da melhor forma que preferir, seja dando uma mensagem de erro, ou coisa do tipo.
  console.log('Digite apenas números.');
  console.log(e.message);
} finally {
  // O finally é o bloco que sempre será executado, gerando um erro ou não.
  console.log(`Isso sempre vai ser executado.`);
}

// Porém, não use try/catch em absolutamente todas as situações. Try/Catch é especifico para códigos que existem a possbilidade de gerar um erro.
// Try/Catchs servem para evitar que esse erro afete muito a experiência do usuário.
// Um exemplo comum seria ao você não saber os valores que vão ser passados de antemão para alguma parte desse código, essa é uma situação perfeita para utilizar try/catch.
// O try/catch evita também que, caso tenha um erro em uma função, todo o seu código pare de funcionar de uma só vez.
