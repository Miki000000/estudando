// Operadores lógicos são operadores que verificam uma ou mais expressões e suas interações. Exemplo:
// Primeiro temos o operador que verificará se todas as expressões são verdadeiras, caso não sejam, retornará falso, que é o AND, representado por &&
// Exemplo:
// Para viajar em uma certa companhia, a pessoa deve primeiro ter mais de 18 anos e também deve-se ter um passaporte. Nesse caso, em que precisamos
// De duas validações em conjunto, sendo elas a idade e o passaporte, utilizamos o operador AND, ou &&.
let idade = 18;
let passaporte = true;
const viajar = idade >= 18 && passaporte;
console.log(`Pode viajar: ${viajar}`);

// Utilizando outro exemplo, poderiamos ver se uma pessoa possuí uma carteira de motorista OU é maior de dezoito anos, caso contrário é presa.
// Como queremos validar apenas uma das informações, utilizamos a operação OR, ou ||
idade = 18;
let carteira = true;
const preso = idade >= 18 || carteira;
console.log(`Você não foi preso: ${preso}`);
// Para melhorar o console para ficar menos confuso, poderemos fazer dessa forma, utilizando de conversão, o operador NOT, que nega uma condição, a revertendo.
// NOT está representado pelo simbolo !, e sua função é reverter, caso o resultado dê true, ele retorna false, e vice-verso.
console.log(`Você foi preso: ${!preso}`);

// Também podemos fazer os dois ao mesmo tempo, utilizando uma aplicação lógica um pouco mais avançada.
// Mudando de exemplo, temos uma pessoa que precisa ter mais de 16 anos, E ter um emprego ou receber mesada.
idade = 14;
let emprego = true;
let mesada = true;
const burgues = idade >= 16 && (emprego || mesada); // <- Verifica se a pessoa tem idade superior ou igual a 16, e caso tenha, verificará se ela cumpre pelo menos um dos requisitos, ou emprego ou mesada.
console.log(burgues); // <- Vai retornar true se a idade e ao menos uma das variaveis forem validadas, caso a idade seja menor que o requerido, ou tenha cumprido os requisitos mas os outros dois não, retornará falso.
const burguesInverso = (idade >= 16 && emprego) || mesada; // <- Nesse caso, ele estará verificando se a idade e o emprego são validados, se não forem, mas a mesada ainda for true, retornará true.
console.log(burguesInverso);
