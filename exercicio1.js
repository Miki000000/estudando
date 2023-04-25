const output = document.getElementById('output');
let n1 = document.getElementById('numero');
let n2 = document.getElementById('limite');

function mostrarTabuada() {
  const numero = parseInt(n1.value);
  const limite = parseInt(n2.value);
  let msg = '';

  if (numero >= 1) {
    output.innerHTML = '';
    for (let i = 1; i <= 1000; i++) {
      let resultado = numero * i;
      if (i === limite + 1) {
        break;
      }

      msg += `${numero} x ${i} = ${resultado}<br>`;
    }
    output.innerHTML = msg;
  } else {
    output.innerHTML = 'Digite um número maior que um.';
  }
}
function limparTabuada() {
  output.innerHTML = '';
}
