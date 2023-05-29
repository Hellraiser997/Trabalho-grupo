function validarEmail() {
  // Obtém o valor do campo de e-mail
  var email = document.getElementById('email').value;
  
  // Expressão regular para validar o formato do e-mail
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Valida o campo de e-mail
  if (regex.test(email)) {
    alert("E-mail válido!");
  } else {
    alert("E-mail inválido!");
  }
}

function enviarFormulario() {
  // Impede o envio padrão do formulário
  preventDefault();
  
  // Validação do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
  
  if (nome === '') {
    exibirMensagem('nomeError', 'Preencha o campo Nome.');
    return;
  }
  
  if (email === '') {
    exibirMensagem('emailError', 'Preencha o campo E-mail.');
    return;
  }

  if (mensagem === '') {
    exibirMensagem('msgError', 'Preencha o campo Mensagem.');
    return;
  }
  
  // Se a validação for bem-sucedida, exibe mensagem de sucesso
  exibirMensagem('successMessage', 'Formulário enviado com sucesso!');
  
  // Limpa o formulário após a submissão
  document.getElementById('formulario').reset();
}

function exibirMensagem(elementId, message) {
  var element = document.getElementById(elementId);
  element.innerText = message;
  element.style.display = 'block';
}