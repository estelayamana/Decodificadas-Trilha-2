function calcularMedia() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const num3 = parseFloat(document.getElementById('num3').value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById('media').innerHTML = 'Erro: Por favor, insira apenas números.';
    return;
  }

  const media = (num1 + num2 + num3) / 3;
  document.getElementById('media').innerHTML = `A média dos números é: ${media.toFixed(2)}`;
}

function verificarMaioridade() {
  const idade = parseInt(document.getElementById('idade').value);

  if (isNaN(idade)) {
    document.getElementById('maioridade').innerHTML = 'Erro: Por favor, insira a sua idade.';
    return;
  }

  const isMaior = idade >= 18; // Idade mínima para ser maior de idade no Brasil
  const mensagem = isMaior ? 'Você é maior de idade.' : 'Você não é maior de idade.';
  document.getElementById('maioridade').innerHTML = mensagem;
}
