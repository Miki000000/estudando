let idadeInput = document.getElementById('idade');
let passaporte = document.getElementById('passaporte');
const output = document.getElementById('output');

function possoViajar() {
  output.innerHTML = '';
  let idade = parseInt(idadeInput.value);

  const viajar =
    (idade >= 18 && passaporte.checked && `Sim`) ||
    (idade < 18 && !passaporte.checked && `Você não tem nem idade, nem passaporte, sinto muito.`) ||
    (!passaporte.checked && 'sem passaporte') ||
    `Você tem apenas ${idade} Anos, te falta ${18 - idade} anos`;
  output.innerHTML = viajar;
}
