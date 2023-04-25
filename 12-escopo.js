// Escopos são locais onde as definições podem funcionar.
// Existem vários escopos, você pode encarar os escopos como pai e filho.
// Vamos definir uma variavel global:
let global = 'esta variavel é global';
// Essa variavel é considerada global pois está no arquivo principal, e não está dentro de nada. Portanto, ela pode ser chamada a qualquer momento do código.
console.log(global);
if (typeof global == 'string') {
  console.log(global);
}
