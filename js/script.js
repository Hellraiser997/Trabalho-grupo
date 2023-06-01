function validarEmail() {
    // Obtém o valor do campo de e-mail
  var email = document.getElementById('email').value;  
  // Expressão regular para validar o formato do e-mail
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  // Valida o campo de e-mail
  if (regex.test(email)) {
    return
  } else {
    alert("E-mail inválido!");
  }
}

function enviarFormulario() {
  // Impede o envio padrão do formulário
  
  // Validação do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
  validarEmail() 
  if (nome == '' || email == '' || mensagem == ''){
    alert('O(s) campo(s) não pode ficar em branco.');
  } 

  // Se a validação for bem-sucedida, exibe mensagem de sucesso
  alert('Formulário enviado com sucesso!');
  
  // Limpa o formulário após a submissão
  document.getElementById('formulario').reset();
}