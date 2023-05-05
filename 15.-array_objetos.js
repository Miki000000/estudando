// Arrays de objetos, são, como o nome indica, arrays dentro de objetos. Elas servem para quando você quer ter mais de um objeto sobre o mesmo assunto, mas prefere não criar um novo sempre.
// Por exemplo, imagine que você quer registrar três pessoas diferentes. Sem o arrays de objetos, você faria assim:
const pessoa1 = { nome: '', idade: 10, email: '' };
const pessoa2 = { nome: '', idade: 10, email: '' };
const pessoa3 = { nome: '', idade: 10, email: '' };
// Mas isso é muito pouco prático. Não vale a pena, e existem formas melhores de fazer isso. Essa forma, no caso, são os arrays de objetos.
// Para fazer um, começamos com a criação de um array. Esse array, terá como valores, objetos, que por sua vez, terão propriedades.
const pessoas = [
  { nome: 'nome1', idade: 10, email: '1@gmail.com' },
  { nome: 'nome2', idade: 10, email: '2@gmail.com' },
  { nome: 'nome3', idade: 10, email: '3@gmail.com' }
];
// Para chamar isso também é muito fácil. Você precisa chamar o array e sua casa, e logo após, chamar a propriedade diretamente, um exemplo seria:
console.log(pessoas[0].nome);
// Como o valor array de número 0 é um objeto, você pode chamar uma de suas propriedades após referenciar o número do valor em questão.
// Para iterar, ou seja, mostrar todos os valores de uma array de objetos para que você não se perca, você faz dessa forma:

for (let i = 0; i < pessoas.length; i++) {
  console.log(`Nome: ${pessoas[i].nome}\nIdade: ${pessoas[i].idade}\nemail: ${pessoas[i].email}`);
}
