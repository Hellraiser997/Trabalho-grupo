function enviarFormulario() {
  // Validação do formulário
  //document.getElementById('nome') é uma chamada à função getElementById do objeto document do JavaScript. Essa função é usada para obter uma referência a um elemento HTML com base no valor do atributo id.
  var nome = document.getElementById('nome').value; // Obtém o valor do campo de nome
  var email = document.getElementById('email').value; // Obtém o valor do campo de email
  var mensagem = document.getElementById('mensagem').value; // Obtém o valor do campo de mensagem

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
