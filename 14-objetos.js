// Um objeto nada mais é do que uma forma de armazenar diferentes tipos de dados em um só lugar, de forma mais organizada.
// Os objetos consistem em propriedades e métodos. Cada propriedade tem seu metodo definido.
// Um objeto é uma forma de criar estruturas como as de um array.
// Vamos fazer primeiro utilizando as Arrays.
const nomes = ['junior', 'cleber', 'brigadeiro'];
const idades = [20, 25, 10];
// Perceba que eu criei duas arrays especificas, uma que irá organizar os nomes, e outra apenas para as idades.
console.log(nomes[0], idades[0]);
// Se eu fizer assim, irei ter a informação completa da pessoa em questão, contanto que a array esteja no local correto.
// Porém, com um objeto, é mais facilmente feito tal distribuição, sem a necessidade de criar variaveis diferentes para um mesmo proposito.
// Vamos criar um objeto em javascript.
// Ele pode ser criado de duas formas, a primeira:
const objeto = new Object();
// Ou da segunda maneira, que é a que eu prefiro usar.
const objeto2 = {};
// Perceba que, ao criar arrays, você utiliza dos cochetes, mas para objetos, as chaves são necessárias.
// Após criar um objeto, existem duas formas de atribuir propriedades a ele, sendo a primeira:
objeto2.nome = 'vitor';
objeto2.idade = '23';
// Se eu chamar esse objeto nesse momento, mesmo que eu não especifique nada, ele irá me trazer ambos.
console.log(objeto2);
// Também é possível selecionar qual propriedade do objeto você deseja chamar, utilizando o seletor "."
console.log(objeto2.nome, objeto2.idade);
// Caso você queira chamar uma propriedade de uma forma diferente, utilizando uma variavel, também é possível.
let chamarObjeto = 'nome';
console.log(objeto2[chamarObjeto]);
// Dessa forma, você também poderá chamar a propriedade que você definiu. Lembre-se que, caso use esse método, sempre deve ser utilizado o valor em string.
// Agora, vamos entender a segunda forma de definir propriedades, utilizando da segunda forma de criar um objeto.
const exemplo1 = {
  nome: 'vitor',
  idade: 23
};
// Lembre-se de sempre separá-las com virgula. Dessa forma, o código fica mais legivel e compacto, colocando as propriedades dentro do proprio objeto.
console.log(exemplo1);
console.log(exemplo1.nome, exemplo1.idade);
