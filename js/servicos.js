// Declaração das variáveis utilizadas
var horaBaseReais = 0
var diaDaSemana = 0
var horaExtra = 0
var valorDaHora = 0
var qtdPessoa = 0
var valorDaHoraPorPessoa = 0
var adicionalPorMinuto = 0.50

// Função para calcular o valor da hora
function calcularHora() {

    // Verificação do dia da semana para definir o valor base
    while (true) {
        diaDaSemana = prompt("Digite 1 para dias de semana e 2 para finais de semana")
        if (diaDaSemana == 1) {
            horaBaseReais = 45
            break
        } else if (diaDaSemana == 2) {
            horaBaseReais = 60
            break
        } else {
            alert("Valor inválido")
        }
    }

    while (true) {
        qtdPessoas = prompt("Digite a quantidade de pessoas")
        if (qtdPessoas == 0 || qtdPessoas > 6) {
            alert("Digite um valor maior que 0 e menor ou igual que 6")
        } else {
            break
        }
    }

    while (true) {
        horaExtra = prompt("Digite os minutos adicionais entre 0 e 300 minutos:")
        if (horaExtra < 0 || horaExtra > 300) {
            alert("Digite um valor entre 0 e 300 minutos")
        } else {
            break
        }
    }

    // Calculo do valor da hora
    valorDaHora = horaBaseReais + (horaExtra * adicionalPorMinuto)
    valorDaHoraPorPessoa = valorDaHora / qtdPessoas
    // Calculo do valor da hora por pessoa
    // Solicitação das horas adicionais

    // Verificação se é apenas uma pessoa
    if (qtdPessoas == 1) {
        alert(`O valor da pista ficou em:  ${valorDaHora}R$\nSendo o valor base: ${horaBaseReais}R$`)
    } else {
        alert(`O valor da pista ficou em: ${valorDaHora}R$ \nSendo o valor base:  horaBaseReais \nValor por pessoa: ${valorDaHoraPorPessoa}R$`)
    }
}