// Métodos são nada mais que funções atreladas à objetos. Ou seja, funções que são executadas ao chamar determinada propriedade de um objeto.
// Para o exemplo, vamos criar um objeto.
const Produto = {
  nome: 'bolsa',
  qtd: 11
};
// Supondo que você queira retirar os itens desse produto, então, você faria da forma mais complicada, sem um método dentro desse objeto, ficaria mais ou menos assim:
Produto.qtd -= 3;

console.log(Produto.qtd);
// Isso funcionaria, pois alteraria o valor da propriedade qtd dentro do objeto Produto.
// Porém teria um problema óbvio, caso você coloque um número maior do que a qtd que você possuí, ele retornaria um número negativo, o que na maioria dos casos
// Isso não seria uma situação ideal. Para contornar isso, poderiamos usar uma função dentro de uma propriedade em um objeto, e isso é um método.
// Por exemplo:
const Produto2 = {
  nome: 'lavadoura',
  qtd: 30,
  //Criei uma propriedade que atuará como uma função dentro do objeto. Nesse caso, seria semelhante a eu escrever function Comprar(n){}
  comprar: function (n) {
    //Dentro dessa propriedade, que é uma função, coloquei algo para ela executar ao ser chamada, exercendo o trabalho de uma função.
    if (n > this.qtd) {
      //Usamos o this. para referenciar a propriedade dentro do objeto na função. This, quando dentro de uma função normal, sempre se referenciará ao escopo da mesma.
      console.log(`Em nosso estoque, temos apenas ${this.qtd} ${this.nome}`);
      return;
    } //Nesse caso, pedi que, se o valor fornecido ao chamar a função, nesse caso "n", for maior que a propriedade DENTRO do objeto, ele executará o if.
  }
};
Produto2.comprar(33);
console.log(Produto2.qtd);
