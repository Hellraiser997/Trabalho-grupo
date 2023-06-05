function enviarFormulario() {
  // Validação do formulário
  var nome = document.getElementById('nome').value; // Obtém o valor do campo de nome
  var email = document.getElementById('email').value; // Obtém o valor do campo de email
  validarEmail(); // Chama a função de validação de email

  if (nome == ''){
    alert('O campo nome não podem ficar em branco.'); // Verifica se o campo de nome está vazio e exibe um alerta
  } else if(email == ''){
    alert('O campo email não podem ficar em branco.'); // Verifica se o campo de email está vazio e exibe um alerta
  } else if(email.indexOf('@') === -1){
    alert('Email incorreto'); // Verifica se o email não contém o caractere '@' e exibe um alerta
  } else if(mensagem == ''){
    alert('O campo mensagem não podem ficar em branco.'); // Verifica se o campo de mensagem está vazio e exibe um alerta
  } else {
    // Se a validação for bem-sucedida, exibe mensagem de sucesso
    alert('Formulário enviado com sucesso!');
  }

  // Limpa o formulário após a submissão
  document.getElementById('formulario').reset();
}
