function enviarFormulario() {
  // Validação do formulário
 
  var nome = prompt("Digite o seu nome:") // Obtém o valor do campo de nome
  var email = prompt("Digite o seu email:") // Obtém o valor do campo de email
  var mensagem = prompt("Digite sua mensagem para nós:") // Obtém o valor do campo de mensagem

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
}
