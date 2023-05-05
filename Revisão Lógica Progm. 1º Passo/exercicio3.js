const arrayTeste = [
  { nome: 'nome1', idade: 10, email: '1@gmail.com' },
  { nome: 'nome2', idade: 10, email: '2@gmail.com' },
  { nome: 'nome3', idade: 10, email: '3@gmail.com' }
];

const teste = prompt('digite o nome da pessoa da busca.');
let pessoaEncontrada;
const msg = document.getElementById('teste');

for (let i = 0; i < arrayTeste.length; i++) {
  if (arrayTeste[i].nome === teste) {
    pessoaEncontrada = arrayTeste[i];
    break;
  } else {
  }
}
if (pessoaEncontrada) {
  msg.innerHTML = `Nome: ${pessoaEncontrada.nome}<br>Idade: ${pessoaEncontrada.idade}<br>Email: ${pessoaEncontrada.email}`;
} else {
  msg.innerHTML = `Nome inválido.`;
}
