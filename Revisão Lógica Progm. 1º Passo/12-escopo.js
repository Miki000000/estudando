// Escopos são locais onde as definições podem funcionar.
// Existem vários escopos, você pode encarar os escopos como pai e filho.
// Vamos definir uma variavel global:
let global = 'esta variavel é global';
// Essa variavel é considerada global pois está no arquivo principal, e não está dentro de nada. Portanto, ela pode ser chamada a qualquer momento do código.
console.log(global);
if (typeof global == 'string') {
  console.log(global);
}
// Ao chamar essa variavel dentro de um if, não tenho problemas algum, pois ela funciona para qualquer lugar, e posso puxá-la para qualquer lugar dentro deste arquivo.
// Agora, existem diferentes tipos de escopos. Um exemplo seria uma variavel declarada dentro de uma função.
function numero1() {
  let n1 = 1;
}
// Se eu tentar chamar esta função, não vai funcionar, pois ela está dentro do escopo da propria função.
// console.log(n1);        //<- Vai dar erro.
// Variaveis só podem ser utilizadas dentro do próprio escopo, sejam eles loops, funções, funções dentro de funções, ifs, etc.
// Um exemplo de escopos diferentes seria:
function nExterno() {
  //Criei uma função externa que agirá como pai.
  let n = 1; // criei uma única variavel para a função externa que só funcionara no escopo dela.
  function nInterno() {
    //criei uma função interna, que atua dentro da outra função.
    let n = 3; //criei a mesma variavel com o mesmo nome, mas com valor diferente
    console.log(n); // chamei a variavel interna
  }
  nInterno(); //chamei a função interna dentro da externa para que possa ser executada
  console.log(n); //chamei a variavel externa
}
nExterno(); //Ao executar, perceba que, mesmo as variaveis tendo o mesmo nome, não entram em conflitos, pois foram usadas em escopos diferentes. A função utilizada
// Dentro do interno, só é valida dentro do escopo em que foi criada, caso eu chame ela do lado de fora, na função externa, ele pegará o valor da variavel com o mesmo nome
// E isso retornaria dois numeros iguais.
