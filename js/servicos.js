var horaBaseReais, diaDaSemana, horaExtra, valorDaHora, qtdPessoas, valorDaHoraPessoa
const adicionalPorMinuto = 0.50
function calcularHora(){
    diaDaSemana = Number(prompt("Qual dia da semana pretende jogar:\nDigite 1 para Segunda-feira a Quinta-feira\nDigite 2 para Sexta-feira a Domingo"))
    qtdPessoas = Number(prompt("Quantas pessoas irão jogar? (Digite apenas número)"))
    if(qtdPessoas <= 0){
        alert("Valor inválido")
        calcularHora()
    }
    horaExtra = Number(prompt("Digite quantos minutos adicionais pretende ficar: 0 - 300"))
    console.log(diaDaSemana)
    if(diaDaSemana == 1){
        horaBaseReais = 45
    } else {
        horaBaseReais = 60
    }
    valorDaHora = horaBaseReais + (horaExtra*adicionalPorMinuto)
    valorDaHoraPessoa = valorDaHora/qtdPessoas
    valorDaHora = valorDaHora.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    horaBaseReais = horaBaseReais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    valorDaHoraPessoa = valorDaHoraPessoa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    if(qtdPessoas == 1) {
        alert("O valor da pista ficou em: "+valorDaHora+"\nSendo o valor base: "+horaBaseReais)
    } else { 
        alert("O valor da pista ficou em: "+valorDaHora+"\nSendo o valor base: "+horaBaseReais+"\nValor por pessoa: "+valorDaHoraPessoa)
    }
}