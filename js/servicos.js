// Declaração das variáveis utilizadas
var horaBaseReais, diaDaSemana, horaExtra, valorDaHora, qtdPessoas, valorDaHoraPorPessoa
// Declaração da constante utilizada
const adicionalPorMinuto = 0.50

// Função para calcular o valor da hora
function calcularHora() {
    // Solicitação dos dados ao usuário
    diaDaSemana = Number(prompt("Qual dia da semana pretende jogar:\nDigite 1 para Segunda-feira a Quinta-feira\nDigite 2 para Sexta-feira a Domingo"))
    qtdPessoas = Number(prompt("Quantas pessoas irão jogar? (Digite apenas número)"))
    // Verificação se os dados são válidos
    if (qtdPessoas <= 0) {
        alert("Valor inválido")
    }
    // Solicitação das horas adicionais
    horaExtra = Number(prompt("Digite quantos minutos adicionais pretende ficar: 0 - 300"))
    console.log(diaDaSemana)
    // Verificação do dia da semana para definir o valor base
    if (diaDaSemana == 1) {
        horaBaseReais = 45
    } else {
        horaBaseReais = 60
    }
    // Calculo do valor da hora
    valorDaHora = horaBaseReais + (horaExtra * adicionalPorMinuto)
    // Calculo do valor da hora por pessoa
    valorDaHoraPorPessoa = valorDaHora / qtdPessoas
    // Formatação dos valores para moeda
    valorDaHora = valorDaHora.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    horaBaseReais = horaBaseReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    valorDaHoraPorPessoa = valorDaHoraPorPessoa.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    // Verificação se é apenas uma pessoa
    if (qtdPessoas == 1) {
        alert("O valor da pista ficou em: " + valorDaHora + "\nSendo o valor base: " + horaBaseReais)
    } else {
        alert("O valor da pista ficou em: " + valorDaHora + "\nSendo o valor base: " + horaBaseReais + "\nValor por pessoa: " + valorDaHoraPorPessoa)
    }
}