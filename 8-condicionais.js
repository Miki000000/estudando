// Condicionais são ferramentas que você utiliza quando você quer que um código só seja executado caso cumpra uma condição.
let idade = 18;
let idadeIrmão = 30;
// Existem três formas de utilizar condicionais, o IF, que verifica se algo atende aquelas condições, e se atender, dispara uma linha de código, exemplo:
if (idadeIrmão - idade == 12) {
  let diferenca = '12 anos';
  console.log(`Você e seu irmão tem ${diferenca} de diferença`);
}
// Também existe outra forma de verificar, caso a condicional não seja cumprida.
// Você pode, em vez de definir outro if, utilizar do elemento else, que dá um resultado quando todas as condições pré-definidas dão errado.
idade = 14;
idadeIrmão = 30;
if (idadeIrmão - idade == 12) {
  let diferenca = '12 anos';
  console.log(`Você e seu irmão tem ${diferenca} de diferença`);
} else {
  console.log(`A conta deu errado :c`);
}
// Por fim, existe a condicional else if, que é para executar outra condição, caso o primeiro if não dê certo. Se você utilizar outro if, serão duas condições a serem cumpridas.
// Enquanto com Else If, essa condição só será necessária, caso o if falhe.
idade = 14;
idadeIrmão = 30;
if (idadeIrmão - idade == 12) {
  let diferenca = '12 anos';
  console.log(`Você e seu irmão tem ${diferenca} de diferença`);
} else if (idadeIrmão - idade == 16) {
  let diferenca = '16 anos';
  console.log(`Você e seu irmão tem ${diferenca} de diferença`);
} else {
  console.log(`A conta deu errado :c`);
}
// No ultimo exemplo, o primeiro if está verificando se a diferença de idade é de 12 anos. Como não era, ele passou para o else if, que verificou se a diferença de idade era de 16.
// No caso acima, o else if está correto, portanto, ele irá rodar o que tem dentro através do console.
// Caso nem If nem Else If fossem corretos, dispararia o else, que enviaria que a conta deu errado.
